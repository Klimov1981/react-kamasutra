import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";

let reducers = combineReducers({
 profilePage: profileReducer,
 dialogsPage: dialogsReducer,
 sidebar: sidebarReducer,
 usersPage: usersReducer,
})
 export const store = createStore(reducers)


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