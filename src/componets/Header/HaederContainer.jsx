import React from 'react'
import { connect } from 'react-redux'
import Header from './Haeder'
import { setAuthUserData,Auth,Logout } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.Auth()
    }
    
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {setAuthUserData,Auth,Logout}) (HeaderContainer)