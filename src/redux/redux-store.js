import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import { thunk as thunkMiddleware } from 'redux-thunk'
let reducers = combineReducers({
 profilePage: profileReducer,
 dialogsPage: dialogsReducer,
 sidebar: sidebarReducer,
 usersPage: usersReducer,
 auth: authReducer,
})
 export const store = createStore(reducers, applyMiddleware(thunkMiddleware))


// import { configureStore } from '@reduxjs/toolkit';
// import { profileReducer } from "./profile-reducer";
// import { dialogsReducer } from "./dialogs-reducer";
// import { sidebarReducer } from "./sidebar-reducer";

// export const store = configureStore({
//   reducer: {
//     profilePage: profileReducer,
//     dialogsPage: dialogsReducer,
//     sidebar: sidebarReducer,
//   },
// })