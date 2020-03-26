import React from "react";
import CanvasContainer from "./CanvasContainer";
import FormContainer from "./FormContainer";
import Table from "./Table";
import Header from "./Header";
import {connect} from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('Home authStatus '+this.props.authStatus);
    }

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

const mapStateToProps = state =>{
    return{
        authStatus: state.auth.authStatus
    };
};
export default connect(mapStateToProps)(Home);