import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useParams, useNavigate } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// Обёртка для классового компонента
// Эта компонетнта отличается, тк общается с url для получения этих данных
// в этом исполнении нужна ф-я withRouter, которая была удалена в 6й версии библиотеки react-router-dom
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
    this.props.getUserProfile(userId)

  }

  render() {

    return <Profile profile={this.props.profile} />;
  }
}




const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});



// Композиция HOC (важен порядок!)


export default compose(connect(mapStateToProps, { getUserProfile }),withRouter)(ProfileContainer)