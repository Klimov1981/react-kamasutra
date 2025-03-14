import { Post } from './Post/Post'
import './Posts.css'

export const Posts = () => {
 return (
  <>
   <div className='profile__item'>
    my posts
    <Post message='1st post'likeNuber='12'/>
    <Post message='2d post' likeNuber='22'/>
   </div>
  </>
 )
}