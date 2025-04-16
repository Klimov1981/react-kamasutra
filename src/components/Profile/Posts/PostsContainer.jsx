import { Posts } from './Posts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return{
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text))
  }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)