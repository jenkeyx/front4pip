import React from "react";

export default class Registration extends React.Component{

    constructor(props) {
        super(props);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this)
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
    render() {
        return(
            <div className="registration">
                <h3>Sign In</h3>
                <form>
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
                        <button>Sign In</button>
                    </div>
                </form>
            </div>
        )
    }

}