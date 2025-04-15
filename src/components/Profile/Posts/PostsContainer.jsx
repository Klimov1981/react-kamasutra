import { Posts } from './Posts'
import { addPostActionCreator,  updateNewPostTextActionCreator} from '../../../redux/profile-reducer'


// Просто обёртка для чистой компоненты Posts

export const PostsContainer = (props) => {

 let state = props.store.getState()

 let addPost = () => {
  props.store.dispatch(addPostActionCreator())
 }

 let onPostOnChange = (text) => {
  props.store.dispatch(updateNewPostTextActionCreator(text))
 }

 return (
  <>
   <Posts 
    updateNewPostText={onPostOnChange}
    addPost={addPost} 
    postsData={state.profilePage.postsData}
    newPostText={state.profilePage.newPostText}/>
  </>
 )
}