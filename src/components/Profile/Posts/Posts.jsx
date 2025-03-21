import { Post } from './Post/Post'
import './Posts.css'

export const Posts = () => {
 const postsData = [
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
 ]

 let posts = postsData.map((post) => (
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