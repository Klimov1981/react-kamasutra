const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    // { id: 1, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:true, fullName: "Яблоко", status: " biowolf", location: {city: "Moscow", citizenship: "RF"} },
    // { id: 2, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:false, fullName: "Андрей Петров", status: "developer", location: {city: "Saint Petersburg", citizenship: "RF"} },
    // { id: 3, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:true, fullName: "Мария Иванова", status: "designer", location: {city: "Novosibirsk", citizenship: "RF"} },
    // { id: 4, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:true, fullName: "John Smith", status: "traveler", location: {city: "London", citizenship: "UK"} },
    // { id: 5, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:true, fullName: "Emma Wilson", status: "photographer", location: {city: "New York", citizenship: "USA"} },
    // { id: 6, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:false, fullName: "Олег Смирнов", status: "student", location: {city: "Kazan", citizenship: "RF"} },
    // { id: 7, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:false, fullName: "Sophie Martin", status: "teacher", location: {city: "Paris", citizenship: "France"} },
    // { id: 8, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:true, fullName: "Иван Козлов", status: "engineer", location: {city: "Yekaterinburg", citizenship: "RF"} },
    // { id: 9, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:false, fullName: "Anna Müller", status: "artist", location: {city: "Berlin", citizenship: "Germany"} },
    // { id: 10, photoUrl: 'https://i.pinimg.com/736x/19/d8/d6/19d8d6120cc94f5d7484e537a134084d.jpg', followed:true, fullName: "Дмитрий Волков", status: "musician", location: {city: "Sochi", citizenship: "RF"} }
],
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW : 
    return {
      ...state,
      users: state.users.map( u => {
        if(u.id === action.userId) {
          return {...u, followed: true}
        }
        return u
      })
    }
    case UNFOLLOW : 
    return {
      ...state,
      users: state.users.map( u => {
        if(u.id === action.userId) {
          return {...u, followed: false}
        } 
        return u
      })
    } 
    case SET_USERS: 
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }

}
