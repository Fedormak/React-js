import Login from "./login"
import {login} from "../../redux/auth-reducer"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)