import React from "react";

export default class Registration extends React.Component{

    constructor(props) {
        super(props);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this)
    }

    onUsernameChange(event){
        this.props.setUsername(event.target.value)
    }

    onPasswordChange(event){
        this.props.setPassword(event.target.value)
    }
    onPasswordRepeatChange(event){
        this.props.setRepeatPassword(event.target.value)
    }

    handleRegistration(){
        const data = this.getData();
        fetch("/registration",{
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({"Content-type":"application/json"})
        })
            .then(response =>{if (response.status === 200) {
                this.props.setAuthStatus(true);
                console.log("OK!")
            }
            })
    }

    render() {
        return(
            <div className="registration">
                <form>
                    <h3>Sign In</h3>
                    <div>
                        <input type="text" name="login" placeholder="username" value={this.props.username} onChange={this.onUsernameChange}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" value={this.props.password} onChange={this.onPasswordChange}/>
                    </div>
                    <div>
                        <input type="password" name="repeatPassword" placeholder="repeatPassword" value={this.props.repeatPassword} onChange={this.onPasswordRepeatChange}/>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleRegistration}>Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
    getData(){
        return{
            username: this.props.username,
            password: this.props.password,
            repeatPassword: this.props.repeatPassword
        }
    }

}