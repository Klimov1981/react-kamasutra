
import { connect } from "react-redux";
import { following, setCurrentPage,  unfollowing,  toggleFollowingInProgress, getUsers } from "../../redux/users-reducer";
import { Users } from './Users';
import React from "react";
import Preloader from "../common/preloder/Prelodaer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import {usersAPI} from "../../api/api"


let mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

class UsersContainer extends React.Component {
  // props здесь является частью объекта, они не передаются, поэтому this.props
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}
// export default connect(mapStateToProps,
//   {follow: following, unfollow: unfollowing, setCurrentPage, toggleFollowingInProgress, getUsers})(UsersContainer)

  export default compose (connect(mapStateToProps,
  {follow: following, unfollow: unfollowing, setCurrentPage, toggleFollowingInProgress, getUsers}), withAuthRedirect)(UsersContainer)