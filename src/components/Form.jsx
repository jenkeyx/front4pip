import React from "react";
import ErrorMsg from "./ErrorMsg";
import {DotArray} from "../classes/DotArray";
import {drawGraphic, drawDots, drawDot} from "./Canvas";


export default class Form extends React.Component{

    constructor(props) {
        super(props);
        this.onChangeX = this.onChangeX.bind(this);
        this.onChangeY = this.onChangeY.bind(this);
        this.onChangeR = this.onChangeR.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this)
        this.onHitCanvas = this.onHitCanvas.bind(this);
    }

    componentDidMount() {
        this.updateData();
        console.log("canvas "+this.refs.canvas);
        drawGraphic(this.props.r, this.refs.canvas);
        drawDots(this.props.dots, this.refs.canvas);
    }

    onHitCanvas(event) {
        let rect = this.refs.canvas.getBoundingClientRect();
        let click_x, click_y;
        click_x = event.clientX - rect.left;
        click_y = event.clientY - rect.top;
        let x = (click_x - 200) / 60; //w = x*60+200
        let y = (-click_y + 200) / 60;//w= -y*60+200
        drawDot(click_x, click_y, this.props.r, this.refs.canvas);
        this.props.setDots({x:x, y:y, r: this.props.r});
        this.sendCoordinates();

    }

    onChangeX(event){
        this.props.changeX(event.target.value)
    }
    onChangeY(event){
        this.setErrorMsg("");
        document.getElementById('yInput').classList.remove("errorInput");
        this.props.changeY(event.target.value);
        this.validateY(event.target.value);

    }
    onChangeR(event){
        this.setErrorMsg("");
        if(this.validateR(event.target.value)){
            drawGraphic(event.target.value, this.refs.canvas);
            this.props.changeR(event.target.value);
            drawDots(this.props.dots, this.refs.canvas);
        }

    }

    onSubmitForm(){
        this.sendCoordinates();
        // const data = this.getData();
        // const authData = this.getAuthData();
        // this.drawDot(this.props.x*60+200,-this.props.y*60+200);
        // fetch("/dots",{
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: new Headers({
        //         "Content-type":"application/json",
        //         "Authorization": 'Basic' + btoa(authData.username + ":" + authData.password)
        //     })
        // })
        //     .then(response =>{if (response.status === 200) {
        //         this.props.setAuthStatus(true);
        //
        //     }})

    }
    getData(){
        return{
            x: this.props.x,
            y: this.props.y,
            r: this.props.r
        }
    }
    getAuthData(){
        return{
            username: this.props.username,
            password: this.props.password
        }
    }
    updateData(){
        if (!(this.props.dots === undefined)) {
            const dots = new DotArray(this.props.dots);
            this.props.setDots(dots.getDots());
        }
    }

    validateY(y) {
        let isValid = true;
        if (y === undefined || ((y.match(/^[0-3](([.,]0+)|)$/) == null
            && y.match(/^-[0-5](([.,]0+)|)$/) == null &&
            y.match(/^[0-2][.,]\d+$/) == null &&
            y.match(/^-[0-4][.,]\d+$/) == null))) {
            isValid = false;
            this.setErrorMsg('Введите значение от -5 до 3.');
            document.getElementById('yInput').classList.add("errorInput");

        }
        return isValid;
    }
    validateR(r) {
        let isValid = true;
        if (r === undefined || (r.match(/^[0-2][.,]\d+$/) == null &&
            r.match(/^[0-3](([.,]0+)|)$/) == null
        )) {
            isValid = false;
            this.setErrorMsg('Значение радиуса не может быть отрицательным');
            document.getElementById('rInput').classList.add("errorInput");

        }
        return isValid;
    }

    setErrorMsg(message) {
        console.log(message);
        let errorSpan = document.getElementById('errorSpan');
        errorSpan.innerHTML = message;
    }

    sendCoordinates() {
        const data = this.getData();
        const authData = this.getAuthData();
        fetch("/dots", {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-type': "application/json",
                'Authorization': "Basic" + btoa(authData.username + ":" + authData.password)
            })
        })
            .then(response => {
                if (response.status === 200) drawDot(this.props.x*60+200,-this.props.y*60+200, this.props.r, this.refs.canvas);
            })
    }

    render() {
        return(
            <div className="form">
                <div className="canvas">
                    <canvas id='canvas' width="400" height="400" ref='canvas' onClick={this.onHitCanvas}>
                        Здесь должен был быть Canvas, но ваш браузер его не поддерживает.
                    </canvas>
                </div>
                <form >
                    <label>
                        X:
                        <select id="xInput" value={this.props.x} onChange={this.onChangeX}>
                            <option value="-5">-5</option>
                            <option value="-4">-4</option>
                            <option value="-3">-3</option>
                            <option value="-2">-2</option>
                            <option value="-1">-1</option>
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
                            <option value="-1">-1</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div style={{marginTop: '.5em'}}>
                            {this.props.r ? ' ' : 'Radius is not selected'}
                        </div>
                    </label>
                    <ErrorMsg style={{color:'red'}}/><br/>
                    <button type="button" onClick={this.onSubmitForm}>
                        Check
                    </button>


                </form>
            </div>
        )
    }
}
