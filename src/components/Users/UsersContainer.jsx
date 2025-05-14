
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setIsFetching, toogleFollowingInProgress } from "../../redux/users-reducer";
import { Users } from './Users';
import React from "react";
import Preloader from "../common/preloder/Prelodaer";
import {usersAPI} from "../../api/api"


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
    this.props.setIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        const uniqueUsers = data.items.filter(
          (user, index, self) => index === self.findIndex(u => u.id === user.id)
        );
        this.props.setIsFetching(false)
        this.props.setUsers(uniqueUsers);
        this.props.setTotalUsersCount(data.totalCount)
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(pageNumber)
      usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.setIsFetching(false)
        this.props.setUsers(data.items)
      })

  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toogleFollowingInProgress={this.props.toogleFollowingInProgress}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}
export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toogleFollowingInProgress})(UsersContainer)