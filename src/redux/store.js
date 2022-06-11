import { configureStore } from '@reduxjs/toolkit'

import notesReducer from './features/notes/notesSlice'
import usersSlice from './features/users/usersSlice'

export default configureStore({
  reducer: {
    notes: notesReducer,
    users: usersSlice
  }
})