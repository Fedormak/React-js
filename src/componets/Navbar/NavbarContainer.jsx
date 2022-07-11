import { connect } from 'react-redux';
import Nav from './Navbar';

const mapStateToProps = (state) => {
    return {
        Navbar: state.navbar
    }
}

const NavbarContainer = connect(mapStateToProps)(Nav)

export default NavbarContainer