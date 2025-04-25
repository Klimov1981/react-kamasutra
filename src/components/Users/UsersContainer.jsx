
import { connect } from "react-redux";
import { Users } from "./Users";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pagenumber) => {
      dispatch(setCurrentPageAC(pagenumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)