import React from "react";
import Form from "./Form";
import {connect} from "react-redux";
import {changeX, changeY, changeR, setDots} from "../store/dotsData/actions";


class FormContainer extends React.Component{
    render() {
        return <Form
            x={this.props.x}  y={this.props.y} r ={this.props.r}
            username={this.props.username} password={this.props.password}
            dots={this.props.dots}
            changeX={this.props.changeX}
            changeY={this.props.changeY}
            changeR={this.props.changeR}
            setDots={this.props.setDots}
        />
    }
}

const mapStateToProps = state =>{
    return{
        x: state.dotsData.x,
        y: state.dotsData.y,
        r: state.dotsData.r,
        username: state.auth.username,
        password: state.auth.password,
        dot: state.dotsData.dot,
        dots: state.dotsData.dots

    }
};
const mapDispatchToProps = {
    changeX,
    changeY,
    changeR,
    setDots
};
export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);