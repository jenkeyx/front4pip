import React from "react";
import ErrorMsg from "./ErrorMsg";
import "../styles/Form.css"
import {DotArray} from "../classes/DotArray";


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
        this.drawGraphic(this.props.r);
        this.drawDots();
        this.updateData();
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
            this.drawGraphic(event.target.value);
            this.props.changeR(event.target.value)
        }

    }

    onSubmitForm(e){
        const data = this.getData();
        const authData = this.getAuthData();
        this.drawDot(this.props.x*60+200,-this.props.x*60+200);
        fetch("/dots",{
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-type":"application/json",
                "Authorization": 'Basic' + btoa(authData.username + ":" + authData.password)
            })
        })
            .then(response =>{if (response.status === 200) {
                this.props.setAuthStatus(true);

            }})

    }
    render() {
        return(
            <div className="form">
                <form >
                    <div className="canvas">
                        <canvas id='canvas' width="400" height="400" ref='canvas' onClick={this.onHitCanvas}>
                        Здесь должен был быть Canvas, но ваш браузер его не поддерживает.
                        </canvas>
                    </div>
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
                        <button type="button" onClick={this.onSubmitForm}>
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
    updateData(){
        const dots = this.getDots();
        this.props.setDots(dots.getDots());
    }
    getAuthData(){
        return{
            username: this.props.username,
            password: this.props.password
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
            this.setErrorMsg('Введите значение от -5 до 3.');
            document.getElementById('rInput').classList.add("errorInput");

        }
        return isValid;
    }

    setErrorMsg(message) {
        console.log(message);
        let errorSpan = document.getElementById('errorSpan');
        errorSpan.innerHTML = message;
    }


    onHitCanvas(event) {
        let rect = this.refs.canvas.getBoundingClientRect();
        let click_x, click_y;
        click_x = event.clientX - rect.left;
        click_y = event.clientY - rect.top;
        let x = (click_x - 200) / 60; //w = x*60+200
        let y = (-click_y + 200) / 60;//w= -y*60+200
        this.drawDot(click_x, click_y);
        this.props.hitCanvas({x:x, y:y, r: this.props.r});
        this.sendCoordinates({x:x, y:y, r: this.props.r});

    }
    drawDot(x, y){
        let c = this.refs.canvas.getContext("2d");
        c.fillStyle = this.checkArea(x, y, this.props.r) ? "#009900" : "#990000";
        c.beginPath();
        c.arc(x, y, 1.5, 0, Math.PI * 2);
        c.fill();
    }

    drawDots() {
        let canvas = this.refs.canvas;
        if (!(canvas === undefined)) {
            const dots = new DotArray(this.props.form.dots);
            await dots.getDots().forEach((dot) => {
                this.drawDot(dot.getX(), dot.getY())
            });
        }

    }
    sendCoordinates(coordinates) {
        const authData = this.getAuthData();
        fetch("/dots", {
            method: "POST",
            body: JSON.stringify(coordinates),
            headers: new Headers({
                'Content-type': "application/json",
                'Authorization': "Basic" + btoa(authData.username + ":" + authData.password)
            })
        })
            .then(response => {
                if (response.status === 200) this.props.hitCanvas([this.props.x, this.props.y, this.props.r]);
            })
    }


    // render() {
    //     return (
    //         <div className="canvas">
    //             <canvas id='canvas' width="400" height="400" ref='canvas' onClick={this.onHitCanvas}>
    //                 Здесь должен был быть Canvas, но ваш браузер его не поддерживает.
    //             </canvas>
    //         </div>
    //     )
    // }


    getAuthData() {
        return {
            username: this.props.username,
            password: this.props.password
        }
    }

    drawGraphic(radius) {
        let c = this.refs.canvas.getContext("2d");
        let width = 400;
        let height = 400;
        let stockRadius = 60;
        let shiftRadius = radius * stockRadius;
        c.clearRect(0, 0, width, height);

        //2part
        c.fillStyle = "#99CCFF";
        c.beginPath();
        c.fillRect(width / 2 - shiftRadius / 2, height / 2 - shiftRadius, shiftRadius / 2, shiftRadius);

// 1part circle of 3 part r= r/2
        c.beginPath();
        c.moveTo(width / 2 + shiftRadius, height / 2);
        c.lineTo(width / 2, height / 2);
        c.lineTo(width / 2, height / 2 - shiftRadius);
        c.arc(width / 2, height / 2, shiftRadius, Math.PI * 1.5, 0);
        c.closePath();
        c.fill();

// 3part triangle 0 r/2 r/2
        c.beginPath();
        c.moveTo(width / 2, height / 2 + shiftRadius / 2);
        c.lineTo(width / 2 - shiftRadius / 2, height / 2);
        c.lineTo(width / 2, height / 2);
        c.lineTo(width / 2, height / 2 + shiftRadius / 2);
        c.closePath();
        c.fill();

        // x-line
        c.beginPath();
        c.moveTo(5, height / 2);
        c.lineTo(width - 5, height / 2);
        c.moveTo(width / 2 - stockRadius, height / 2 - 3);
        c.lineTo(width / 2 - stockRadius, height / 2 + 3);
        c.moveTo(width / 2 - stockRadius * 2, height / 2 - 3);
        c.lineTo(width / 2 - stockRadius * 2, height / 2 + 3);
        c.moveTo(width / 2 + stockRadius * 2, height / 2 - 3);
        c.lineTo(width / 2 + stockRadius * 2, height / 2 + 3);
        c.moveTo(width / 2 + stockRadius, height / 2 - 3);
        c.lineTo(width / 2 + stockRadius, height / 2 + 3);
        c.moveTo(width - 10, height / 2 - 5);
        c.lineTo(width - 6, height / 2);
        c.lineTo(width - 10, height / 2 + 5);
        c.closePath();
        c.stroke();


//y-line
        c.beginPath();
        c.moveTo(width / 2, 5);
        c.lineTo(width / 2, height - 5);
        c.moveTo(width / 2 - 3, height / 2 - stockRadius);
        c.lineTo(width / 2 + 3, height / 2 - stockRadius);
        c.moveTo(width / 2 - 3, height / 2 - stockRadius * 2);
        c.lineTo(width / 2 + 3, height / 2 - stockRadius * 2);
        c.moveTo(width / 2 - 3, height / 2 + stockRadius * 2);
        c.lineTo(width / 2 + 3, height / 2 + stockRadius * 2);
        c.moveTo(width / 2 - 3, height / 2 + stockRadius);
        c.lineTo(width / 2 + 3, height / 2 + stockRadius);
        c.moveTo(width / 2 - 5, 10);
        c.lineTo(width / 2, 6);
        c.lineTo(width / 2 + 5, 10);
        c.closePath();
        c.stroke();

//text
        c.font = "14px Arial";
        c.fillStyle = "#000000";
        c.fillText("X", width - 13, height / 2 - 5);
        c.fillText('2', width / 2 + stockRadius * 2, height / 2 - 5);
        c.fillText('1', width / 2 + stockRadius, height / 2 - 5);
        c.fillText('-1', width / 2 - stockRadius, height / 2 - 5);
        c.fillText('-2', width / 2 - stockRadius * 2, height / 2 - 5);
        c.fillText("Y", width / 2 + 5, 13);
        c.fillText('-1', width / 2 + 5, height / 2 + stockRadius);
        c.fillText('-2', width / 2 + 5, height / 2 + stockRadius * 2);
        c.fillText('2', width / 2 + 5, height / 2 - stockRadius * 2);
        c.fillText("1", width / 2 + 5, height / 2 - stockRadius);

    }

    checkArea(x, y, r) {
        return (x <= 0 && y >= 0 && x >= -r / 2 && y <= r) ||
            (x <= 0 && y <= 0 && y >= -x - r / 2) ||
            (x >= 0 && y >= 0 && r * r >= x * x + y * y);
    }
}
