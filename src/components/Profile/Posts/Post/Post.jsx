import './Post.css'

export const Post = ({message, likeNumber}) => {
 return (
  <>
   <div className=''>
    {message}
   </div>
   <span>{`likes number: ${likeNumber}`}</span>
  </>
 )
}