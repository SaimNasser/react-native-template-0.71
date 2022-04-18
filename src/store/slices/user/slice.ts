import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../index'

// Define a type of User Meta
interface UserMeta {
    id: string
}
// Define a type for the slice state
export interface UserState {
    token?: string | null,
    isLoggedIn?: boolean,
    userMeta?: null | object
}

// Define the initial state using that type
const initialState: UserState = {
    token: null,
    isLoggedIn: false,
    userMeta: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        setUserMeta: (state, action: PayloadAction<UserMeta>) => {
            state.userMeta = action.payload
        },
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        }
    },
})

export const { setToken, setIsLoggedIn, setUserMeta } = userSlice.actions

// Selectors
export const selectToken = (state: RootState) => state.user.token;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectUserMeta = (state: RootState) => state.user.userMeta;

export default userSlice.reducer