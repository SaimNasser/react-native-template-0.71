import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define a type of User Meta
interface UserMeta {
  id: string;
}
// Define a type for the slice state
export interface UserState {
  token?: string | null;
  isLoggedIn?: boolean;
  userMeta?: null | object;
}

// Define the initial state using that type
const initialState: UserState = {
  token: null,
  isLoggedIn: false,
  userMeta: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserMeta: (state, action: PayloadAction<UserMeta>) => {
      state.userMeta = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default userSlice;
