import React from "react";
import Canvas from "./Canvas";
import {hitCanvas} from "../store/canvas/actions";
import {connect} from "react-redux";

class CanvasContainer extends React.Component{
    render() {
        return <Canvas
            x={this.props.x}  y={this.props.y} r ={this.props.r}
            username={this.props.username} password={this.props.password}
            hitCanvas={this.props.hitCanvas}
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
    hitCanvas: hitCanvas,
};
export default connect(mapStateToProps,mapDispatchToProps)(CanvasContainer);