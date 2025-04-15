 const ADD_POST = 'ADD-POST'
 const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

export const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST:{
      let newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likeNumber: 0,
    }
    state.postsData = [
        ...state.postsData,
        newPost
    ]
    state.newPostText = ''
    return state}
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default: 
      return state
  }

//  if (action.type === ADD_POST) {
//   let newPost = {
//       id: state.postsData.length + 1,
//       message: state.newPostText,
//       likeNumber: 0,
//   };
//   state.postsData = [
//       ...state.postsData,
//       newPost
//   ];
//   state.newPostText = '';
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//   state.newPostText = action.newText;
// } 

}