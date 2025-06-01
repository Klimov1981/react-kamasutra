import { usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  postsData: [
    { id: 1, message: "Яблоко", likeNumber: 23 },
    { id: 2, message: "Банан", likeNumber: 244 },
    { id: 3, message: "Апельсин", likeNumber: 24 },
    { id: 4, message: "Груша", likeNumber: 22 },
    { id: 5, message: "Виноград", likeNumber: 2 },
    { id: 6, message: "Киви", likeNumber: 4 },
    { id: 7, message: "Мango", likeNumber: 88 },
    { id: 8, message: "Ананас", likeNumber: 78 },
    { id: 9, message: "Персик", likeNumber: 9 },
    { id: 10, message: "Черешня", likeNumber: 67 }
  ],
  newPostText: '',
  profile: null,
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const getUserProfile = (userId) => (dispath) => {
  usersAPI.getProfile(userId)
    .then(response => {
      dispath(setUserProfile(response.data))
    })
    .catch(error => {
      console.error("Error fetching profile:", error);
    })
}

export const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likeNumber: 0,
      }



      return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, newPost]
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state
  }

}
