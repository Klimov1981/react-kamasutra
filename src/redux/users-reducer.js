const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURREN_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_FETCHING_TOOGLE = 'IS_FETCHING_TOOGLE'
const IS_FOLLOWING_IN_PROGRESS_TOOGLE = 'IS_FOLLOWING_IN_PROGRESS_TOOGLE'

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  }
}

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
  }
}

export const setIsFetching = (isFetching) => {
  return {
    type: IS_FETCHING_TOOGLE,
    isFetching,
  }
}

export const toogleFollowingInProgress = (isFetching, userId) => {
  return {
    type: IS_FOLLOWING_IN_PROGRESS_TOOGLE,
    isFetching,
    userId,
  }

}

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case IS_FETCHING_TOOGLE:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case IS_FOLLOWING_IN_PROGRESS_TOOGLE:
      return {
        ...state,
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id != action.userId),
      }

    default:
      return state
  }

}
