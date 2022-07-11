import React from 'react';
import Profile from './Profile';
import { addPost,UserProfile,getUserStatus,updateUserStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../Hoc/withAuthRedirect"
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 24263
    }
    this.props.UserProfile(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose (
  connect(mapStateToProps, {addPost,UserProfile,getUserStatus,updateUserStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)