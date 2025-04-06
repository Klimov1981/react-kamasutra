import { Post } from './Post/Post'
import './Posts.css'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../data'




export const Posts = (props) => {


 let posts = props.postsData.map((post, index) => (
  <Post key={index} message={post.message} likeNumber={post.likeNumber} />
 ))

 let newPostElement = React.createRef()

 let addPost = () => {
  // props.addPost(text)
  props.dispatch(addPostActionCreator())
 }

 let onPostOnChange = () => {
  let text = newPostElement.current.value
  // props.updateNewPostText(text)
  props.dispatch(updateNewPostTextActionCreator(text))
 }

 return (
  <>
   <div className='postsBox'>
    <h3> My posts </h3>
    <textarea
     ref={newPostElement}
     onChange={onPostOnChange}
     value={props.newPostText}>

    </textarea>
    <button onClick={addPost}>add post</button>
    <div className='posts'>
     {posts}
    </div>
   </div>
  </>
 )
}