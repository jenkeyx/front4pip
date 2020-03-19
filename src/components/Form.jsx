import React from "react";
//import {InputText} from 'primereact/inputtext';

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
            <div className="auth">
                <h3>Sign In</h3>
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

}
