import React from 'react'
import './ProfileStatus.css'

class ProfileStatus extends React.Component {

 state = {
  editMode: false
 }

 activateEditMode = () => {
  this.setState( {
    editMode: true
  })
 }

 deactivateEditMode = () => {
  this.setState({
    editMode: false
  })
 }
 render() {
  return (
   <>
    <div>
     {!this.state.editMode &&
      <div>
       <span onDoubleClick={this.activateEditMode}>{this.props.status || "Нет статуса" }</span>
      </div>
     }
     {this.state.editMode &&
      <div>
       <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
      </div>}
    </div>
   </>
  )
 }
}

export default ProfileStatus