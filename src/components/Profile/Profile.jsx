
import { Posts } from './Posts/Posts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import './Profile.css'

export const Profile = (props) => {

 return (
  <>
    <ProfileInfo />
    <Posts postsData={props.postsData}/>
  </>
 )
}