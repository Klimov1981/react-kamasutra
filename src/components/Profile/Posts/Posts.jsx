import { Post } from './Post/Post'
import './Posts.css'
import React from 'react'




export const Posts = (props) => {

 console.log(props);

 let posts = props.postsData.map((post, index) => (
  <Post key={index} message={post.message} likeNumber={post.likeNumber} />
 ))

 let newPostElement = React.createRef()

 let onAddPost = () => {
  props.addPost()
 }

 let onPostOnChange = () => {
  let text = newPostElement.current.value
  props.updateNewPostText(text)
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
    <button onClick={onAddPost}>add post</button>
    <div className='posts'>
     {posts}
    </div>
   </div>
  </>
 )
}