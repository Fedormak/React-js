import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers} from "../../../redux/user-reducer";
import FindUsers from "./findUsers/findUsers";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect"
import { compose } from "redux";

class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChenged = (pageNumber) => {
        
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <> 
        {this.props.isFetching ? <Preloader /> : null}
        <FindUsers 
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onPageChenged={this.onPageChenged}
        users={this.props.users}
        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        followInProgress={this.props.followInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {follow,unfollow,setCurrentPage, toggleIsFollowingProgress, getUsers: getUsers} )
)(FindUsersContainer)