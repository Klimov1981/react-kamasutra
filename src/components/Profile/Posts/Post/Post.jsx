import './Post.css'

export const Post = ({message, likeNuber}) => {
 return (
  <>
   <div className=''>
    {message}
   </div>
   <span>{`likes number: ${likeNuber}`}</span>
  </>
 )
}