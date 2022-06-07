import {RootState} from '~store';
import userSlice from './slice';

// Reducer
export const userSliceReducer = userSlice.reducer;

// Actions
const {} = userSlice.actions;
// Selectors

export const selectToken = (state: RootState) => state.user.token;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectUserMeta = (state: RootState) => state.user.userMeta;
