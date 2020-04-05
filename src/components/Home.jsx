import React from "react";
import FormContainer from "./FormContainer";
import Table from "./Table";
import Header from "./Header";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class Home extends React.Component {
    render() {
        if(this.props.authStatus){
            return(
                <div>
                    <Header/>
                    <div id='wrapper'>
                        <div>
                            <FormContainer/>
                        </div>
                        <Table dots={this.props.dots}/>
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
        authStatus: state.auth.authStatus,
        dots: state.dotsData.dots
    };
};
export default connect(mapStateToProps)(Home);