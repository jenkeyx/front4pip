import React from "react";
import CanvasContainer from "./CanvasContainer";
import FormContainer from "./FormContainer";

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <CanvasContainer/>
                <FormContainer/>
            </div>

        )
    }
}