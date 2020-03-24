import React from "react";

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
        this.props.changeY(event.target.value)
    }
    onChangeR(event){
        this.props.changeR(event.target.value)
    }

    onSubmitForm(url){
        if (this.validate(this.props.x, this.props.y, this.props.r)) {
            const data = this.getData();
            fetch(url,{
                method: "POST",
                body: data,
                headers: new Headers({"Authorization": 'Basic' + btoa(data.x +  ":" + data.y +  ":" + data.r) })
            })
                .then(response =>{if (response.status === 200) this.props.setAuthStatus(true)})
        }
    }
    render() {
        return(
            <div className="auth">
                <form >
                    <fieldset>
                        <label>
                            X:
                            <select value={this.props.x} onChange={this.onChangeX}>
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
                                       placeholder={"-3 .. 5"}/>
                        </label>

                        <label>
                            R:
                            <select value={this.props.r} onChange={this.onChangeR}>
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
                        <button
                            type="submit"
                            onClick={this.onSubmitForm}>
                            Check
                        </button>

                    </fieldset>
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
    validate(x, y, r) {
        let isValid = true;
        if (x === undefined) {
            this.setErrorMsg('Вы не выбрали значение Х. Сделайте это.');
            isValid = false;
        } else if (x.match(/^[0-3](([.,]0+)|)$/) == null
            && x.match(/^-[0-5](([.,]0+)|)$/) == null &&
            x.match(/^[0-2][.,]\d+$/) == null &&
            x.match(/^-[0-4][.,]\d+$/) == null) {
            isValid = false;
            this.setErrorMsg('Выбрано некорректное значение Х или не входящее в допустимый диапозон.<br/>Введите значение от -5 до 3.');
        }
        if (y === undefined) {
            this.setErrorMsg('Вы не написали значение Y.');
            isValid = false;
        } else if (y.match(/^[0-3](([.,]0+)|)$/) == null
            && y.match(/^-[0-5](([.,]0+)|)$/) == null &&
            y.match(/^[0-2][.,]\d+$/) == null &&
            y.match(/^-[0-4][.,]\d+$/) == null) {
            isValid = false;
            this.setErrorMsg('Выбрано некорректное значение Y или не входящее в допустимый диапозон.<br/>Введите значение от -5 до 3.');
        }
        if (r.match(/^[0-3](([.,]0+)|)$/) == null
            && r.match(/^-[0-5](([.,]0+)|)$/) == null &&
            r.match(/^[0-2][.,]\d+$/) == null &&
            r.match(/^-[0-4][.,]\d+$/) == null) {
            isValid = false;
            this.setErrorMsg('Выбрано некорректное значение R или не входящее в допустимый диапозон.<br/>Введите значение от -5 до 3.');
        }
        return isValid;
    }

    setErrorMsg(message) {
        let errorSpan = document.getElementById('errorSpan');
        errorSpan.innerHTML = message;
    }
}
