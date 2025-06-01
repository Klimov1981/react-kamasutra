import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth

})

export const withAuthRedirect = (Component) => {
 class RedirectComponent extends React.Component {
  render() {
   if(!this.props.isAuth) return <Navigate to='/login' replace />
   return <Component {...this.props} />
  }
 }

 let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
 return ConnectedAuthRedirectComponent
}