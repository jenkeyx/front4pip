import React from "react";
import CanvasContainer from "./CanvasContainer";
import FormContainer from "./FormContainer";
import Table from "./Table";
import Header from "./Header";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('Home authStatus '+this.props.authStatus);
    }

    render() {
        if(this.props.authStatus){
            return(
                <div>
                    <Header/>
                    <div id='wrapper'>
                        <div>
                            {/*<CanvasContainer/>*/}
                            <FormContainer/>
                        </div>
                        <Table/>
                    </div>

                </div>

            )
        }else{
            return <Redirect to={'/'}/>
        }

    }
}

const mapStateToProps = state =>{
    return{
        authStatus: state.auth.authStatus
    };
};
export default connect(mapStateToProps)(Home);