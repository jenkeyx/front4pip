import React from "react";
import {DotArray} from "../classes/DotArray";
import {connect} from "react-redux";
import "../styles/Table.css";

class Table extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const dots = new DotArray(this.props.dots).getDots();
        return(
            <div className="table">
                <table>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Hit</th>
                    </tr>
                    {dots.map((dot, id) => (
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
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        dots: state.form.dots
    }
};
const mapDispatchToProps = dispatch => {};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
