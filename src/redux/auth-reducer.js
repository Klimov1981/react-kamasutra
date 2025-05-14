
const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
}



export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    case SET_IS_FETCHING: 
    return {
      ...state,
      isFetching: action.isFetching,
    }

    default:
      return state
  }

}

export const setAuthUserData = (id, login, email) => {
  return {
    type: SET_USER_DATA,
    data: {
      id,
      login,
      email,
    }
  }
}

export const setIsFetching = (isFetching) => {
  return {
    type : SET_IS_FETCHING,
    isFetching,
  }
}
