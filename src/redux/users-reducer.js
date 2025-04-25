const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [],
  pageSize: 2,
  totalUsersCount: 23,
  currentPage: 1,
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW : 
    return {
      ...state,
      users: state.users.map( u => {
        if(u.id === action.userId) {
          return {...u, followed: true}
        }
        return u
      })
    }
    case UNFOLLOW : 
    return {
      ...state,
      users: state.users.map( u => {
        if(u.id === action.userId) {
          return {...u, followed: false}
        } 
        return u
      })
    } 
    case SET_USERS: 
    return {
      ...state,
      users: [
        ...state.users,
        ...action.users.filter(newUser => 
          !state.users.some(existingUser => existingUser.id === newUser.id)
        ),
      ],
    }
    default:
      return state
  }

}
