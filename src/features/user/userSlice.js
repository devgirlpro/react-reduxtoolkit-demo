import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    loading: false,
    users: [],
    error: ''
}

//generates pending, fulfilled and rejecteed action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data)
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    
    extraReducers: builder  => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        } )
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.payload
        })

    }
})

export default userSlice.reducer
