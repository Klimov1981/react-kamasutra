import { Post } from './Post/Post'
import './Posts.css'

export const Posts = (props) => {


 let posts = props.postsData.map((post) => (
  <Post key={post.id} message={post.message} likeNumber={post.likeNumber} />
 ))

 return (
  <>
   <div className='postsBox'>
    <h3> My posts </h3>
    <textarea name="" id=""></textarea>
    <button>add post</button>
    <div className='posts'>
     {posts}
    </div>
   </div>
  </>
 )
}