import { Posts } from '../Posts/Posts'
import './Profile.css'

export const Profile = () => {
 return (
  <>
    <img src="https://avatars.mds.yandex.net/i?id=490b4c8bd981f0101fcdc6b16cb36e51_l-5265720-images-thumbs&n=13" alt="hero__img" />
    <div className='profile__item'>
     ava & descr
    </div>
    <Posts />
  </>
 )
}