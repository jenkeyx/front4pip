import React from "react";
import ErrorMsg from "./ErrorMsg";
import "../styles/Form.css"

export default class Form extends React.Component{

    constructor(props) {
        super(props);
        this.onChangeX = this.onChangeX.bind(this);
        this.onChangeY = this.onChangeY.bind(this);
        this.onChangeR = this.onChangeR.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this)
    }

    onChangeX(event){
        this.props.changeX(event.target.value)
    }
    onChangeY(event){
        this.setErrorMsg("");
        document.getElementById('yInput').classList.remove("errorInput");
        this.props.changeY(event.target.value);
        this.validate(event.target.value)
    }
    onChangeR(event){
        this.props.changeR(event.target.value)
    }

    onSubmitForm(url){
        const data = this.getData();
        fetch(url,{
            method: "POST",
            body: data,
            headers: new Headers({"Authorization": 'Basic' + btoa(data.x +  ":" + data.y +  ":" + data.r) })
        })
            .then(response =>{if (response.status === 200) this.props.setAuthStatus(true)})

    }
    render() {
        return(
            <div className="form">
                <form >

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
                        <ErrorMsg style={{color:'red'}}/><br/>
                        <button
                            onClick={this.onSubmitForm}>
                            Check
                        </button>


                </form>
            </div>
        )
    }

    getData(){
        return{
            x: this.props.x,
            y: this.props.y,
            r: this.props.r
        }
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
