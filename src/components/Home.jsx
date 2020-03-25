import React from "react";
import CanvasContainer from "./CanvasContainer";
import FormContainer from "./FormContainer";
import Table from "./Table";
import Header from "./Header";
import ErrorMsg from "./ErrorMsg"

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <div id='wrapper'>
                    <div>
                        <CanvasContainer/>
                        <FormContainer/>
                    </div>
                    <Table/>
                </div>

            </div>

        )
    }
}