import React from "react";
import Canvas from "./Canvas";
import {hitCanvas} from "../store/canvas/actions";
import {connect} from "react-redux";

class CanvasContainer extends React.Component{
    render() {
        return <Canvas
            x={this.props.x}  y={this.props.y}
            r ={this.props.r}
            hitCanvas={this.props.hitCanvas}
            />
    }
}

const mapStateToProps = state =>{
    return{
        x: state.canvas.coordinates[0],
        y: state.canvas.coordinates[1],
        r: state.canvas.coordinates[2]
    }
};
const mapDispatchToProps = {
    hitCanvas: hitCanvas(),
};
export default connect(mapStateToProps,mapDispatchToProps)(CanvasContainer);