import Preloader from '../../common/preloder/Prelodaer'
import './ProfileInfo.css'
import  ProfileStatus  from './ProfileStatus';

export const ProfileInfo = (props) => {
 console.log(props);
 
 if(!props.profile) {
  return <Preloader/>
 }
 return (
  <>
   <img src="https://i.pinimg.com/originals/50/14/98/50149848c89449f50c644262a5153e72.jpg" alt="hero__img" />
   <div className='profileDescr'>
    <img src={props.profile.photos.small}  />
    <p>{props.profile.aboutMe}</p>
    <ul>
     <li>{props.profile.contacts.facebook}</li>
     <li>{props.profile.contacts.github}</li>
     <li>{props.profile.contacts.instagram}</li>
     <li>{props.profile.contacts.twitter}</li>
     <li>{props.profile.contacts.vk}</li>
    </ul>
    <ProfileStatus status={"Salam"}/>
    ava & descr

   </div>
  </>
 )
}