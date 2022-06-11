import { createSlice } from '@reduxjs/toolkit'
import {notes} from '../../../components/admin/dummyData'

const initialState = notes

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {}
})

export default notesSlice.reducer