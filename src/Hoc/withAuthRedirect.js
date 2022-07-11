import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsForRederect = (props) => ({
    isAuth: props.auth.isAuth
  })

export const withAuthRedirect = (Component) => {
    
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRederect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
} 