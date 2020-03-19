import React from "react";
import CanvasContainer from "./components/CanvasContainer";
import FormContainer from "./components/FormContainer";

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