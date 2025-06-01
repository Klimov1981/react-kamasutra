import './Header.css'
import { Header } from './Header'
import React from 'react'
import { connect } from 'react-redux';
import { getAuthUserData, setIsFetching } from '../../redux/auth-reducer';

 class HeaderContainer extends React.Component {
  
  componentDidMount() {
    
    this.props.setIsFetching(true)
    this.props.getAuthUserData()
  }
  render() {
    return (
      <>
        <Header {...this.props}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }}

export default connect(mapStateToProps, {getAuthUserData, setIsFetching})(HeaderContainer)