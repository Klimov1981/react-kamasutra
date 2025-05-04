import React from 'react';
import { Profile } from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams, useNavigate } from 'react-router-dom';

// Обёртка для классового компонента
function withRouter(Component) {
  return function WrappedComponent(props) {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} router={{ params, navigate }} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.router.params.userId || 2; // Используем параметр из URL или дефолтное значение
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
      });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

// Композиция HOC (важен порядок!)
export default connect(
  mapStateToProps, 
  { setUserProfile }
)(withRouter(ProfileContainer));