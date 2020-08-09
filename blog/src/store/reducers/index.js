import { combineReducers } from "redux"
import { postReducer } from "./postReducer"
import { usersReducer } from "./usersReducer"

export const combinedReducers = combineReducers({
  posts: postReducer,
  users: usersReducer,
})
