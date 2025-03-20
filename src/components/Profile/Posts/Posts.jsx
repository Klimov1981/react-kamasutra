import { Post } from './Post/Post'
import './Posts.css'

export const Posts = () => {
 return (
  <>
   <div className='postsBox'>
    <h3> My posts </h3>
    <textarea name="" id=""></textarea>
    <button>add post</button>
    <div className='posts'>
    <Post message='1st post'likeNuber='12'/>
    <Post message='2d post' likeNuber='22'/>
    </div>
   </div>
  </>
 )
}