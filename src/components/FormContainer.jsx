import React from "react";
import Form from "./Form";
import {connect} from "react-redux";
import {changeX, changeY, changeR} from "../store/form/actions";

class FormContainer extends React.Component{
    render() {
        return <Form
            x={this.props.x}  y={this.props.y} r ={this.props.r}
            username={this.props.username} password={this.props.password}
            changeX={this.props.changeX}
            changeY={this.props.changeY}
            changeR={this.props.changeR}
        />
    }
}

const mapStateToProps = state =>{
    return{
        x: state.form.x,
        y: state.form.y,
        r: state.form.r,
        username: state.auth.username,
        password: state.auth.password
    }
};
const mapDispatchToProps = {
    changeX: changeX,
    changeY: changeY,
    changeR: changeR
};
export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);