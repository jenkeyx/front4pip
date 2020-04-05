import React from "react";
import {DotArray} from "../classes/DotArray";
import {connect} from "react-redux";

class Table extends React.Component{
    constructor(props) {
        super(props);
    }
    getDots(){
        const dots = new DotArray(this.props.dots);
        console.log("getDots()");
        console.log(dots);
        return dots.getDots();
    }

    render() {
        return(
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        <td>X</td>
                        <td>Y</td>
                        <td>R</td>
                        <td>Hit</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getDots().map((dot, id) => (
                        <tr key={id}>
                            <td>
                                {String(dot.getX().toFixed(2)) || <br/>}
                            </td>
                            <td>
                                {String(dot.getY().toFixed(2)) || ''}
                            </td>
                            <td>
                                {String(dot.getR()) ||''}
                            </td>
                            <td>
                                {String(dot.isHit()) ||''}
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        dots: state.dotsData.dots
    };
};
export default connect(mapStateToProps)(Table);