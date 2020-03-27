import React from "react";
import ErrorMsg from "./ErrorMsg";
import "../styles/Form.css"
import {DotArray} from "../classes/DotArray";
import axios from 'axios';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeX = this.onChangeX.bind(this);
        this.onChangeY = this.onChangeY.bind(this);
        this.onChangeR = this.onChangeR.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeX(event) {
        this.props.changeX(event.target.value)
    }

    onChangeY(event) {
        this.setErrorMsg("");
        document.getElementById('yInput').classList.remove("errorInput");
        this.props.changeY(event.target.value);
        this.validate(event.target.value)
    }

    onChangeR(event) {
        this.props.changeR(event.target.value)
    }

    onSubmit(event) {
        event.preventDefault();
        this.sendDots()
    }

    sendDots() {
        let ok = false;
        const data = this.getData();
        const authData = this.getAuthData();
        fetch("/dots", {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": 'Basic' + btoa(authData.username + ":" + authData.password)
            })
        })
            .then(response => {
                    if (response.status === 200) {
                        ok = true;
                    }
                },
                () => console.log("ERROR"));
        this.updateDots();
    }

    render() {
        return (
            <div className="form">
                <form>

                    <label>
                        X:
                        <select id="xInput" value={this.props.x} onChange={this.onChangeX}>
                            <option value="-5">-5</option>
                            <option value="-4">-4</option>
                            <option value="-3">-3</option>
                            <option value="-2">-2</option>
                            <option value="-1">1</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label>
                        Y:
                        <input id="yInput" type="text" size="30"
                               value={this.props.y}
                               onChange={this.onChangeY}
                               placeholder={"-5 .. 3"}/>
                    </label>

                    <label>
                        R:
                        <select id="rInput" value={this.props.r} onChange={this.onChangeR}>
                            <option value="-5">-5</option>
                            <option value="-4">-4</option>
                            <option value="-3">-3</option>
                            <option value="-2">-2</option>
                            <option value="-1">1</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div style={{marginTop: '.5em'}}>
                            {this.props.r ? ' ' : 'Radius is not selected'}
                        </div>
                    </label>
                    <ErrorMsg style={{color: 'red'}}/><br/>
                    <button type="submit" onClick={this.onSubmit}>
                        Check
                    </button>


                </form>
            </div>
        )
    }

    getData() {
        return {
            x: this.props.x,
            y: this.props.y,
            r: this.props.r
        }
    }

    getAuthData() {
        return {
            username: this.props.username,
            password: this.props.password
        }
    }

    async getDotsFormServer() {
        let dots = new DotArray(this.props.dots);
        const authData = this.getAuthData();
        await axios.get("/dots", {
            headers: {
                Authorization: 'Basic' + btoa(authData.username + ":" + authData.password),
                'Content-type': 'application/json'
            }
        }).then(
            response => {
                if (response.status === 200) {
                    dots = new DotArray();
                    Array.from(response.data).forEach(dot => {
                        dots.add(dot.x, dot.y, dot.r)
                    })
                }
            },
            () => {
                console.log("sukaa")
            }
        );
        return dots
    }

    async updateDots() {
        const dots = await this.getDotsFormServer();
        this.props.setDots(dots);
    }

    //todo fix bugs
    validate(y) {
        let isValid = true;
        if (y === undefined || (y.match(/^[0-3](([.,]0+)|)$/) == null
            && y.match(/^-[0-5](([.,]0+)|)$/) == null &&
            y.match(/^[0-2][.,]\d+$/) == null &&
            y.match(/^-[0-4][.,]\d+$/) == null)) {
            isValid = false;
            this.setErrorMsg('Введите значение от -5 до 3.');
            document.getElementById('yInput').classList.add("errorInput");

        }
        return isValid;
    }

    setErrorMsg(message) {
        console.log(message);
        let errorSpan = document.getElementById('errorSpan');
        errorSpan.innerHTML = message;
    }
}
