import { PostsContainer } from './Posts/PostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import './Profile.css'

export const Profile = (props) => {
 return (
  <>
    <ProfileInfo profile={props.profile}/>
    <PostsContainer />
  </>
 )
}