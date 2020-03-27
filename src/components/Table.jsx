import React from "react";
import {DotArray} from "../classes/DotArray";
import "../styles/Table.css";

export default class Table extends React.Component{
    getDots(){
        const dots = new DotArray(this.props.dots);
        return dots.getArray() //{dots: this.props.dots}
    }

    render() {
        console.log(this.getDots(),"bruh");
        return(
            <div className="table">
                <table>
                    <tbody>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Hit</th>
                    </tr>
                    {this.getDots().map((dot, id) => (
                        <tr key={id}>
                            <td>
                                {String(dot.getX())}
                            </td>
                            <td>
                                {String(dot.getY())}
                            </td>
                            <td>
                                {String(dot.getR())}
                            </td>
                            <td>
                                {String(dot.isHit())}
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
    // getDots(){
    //     return {dots: this.props.dots}
    //
    // }
}