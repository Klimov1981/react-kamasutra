import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    
    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email) => ({
  type: SET_USER_DATA,
  data: { id, login, email }
});

export const getAuthUserData = () => (dispatch) => {
  dispatch(setIsFetching(true));
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    })
    .finally(() => dispatch(setIsFetching(false)));
};

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching
});