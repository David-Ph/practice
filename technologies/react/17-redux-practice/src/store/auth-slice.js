import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, payload) {
      if (
        payload.payload.email.includes("@") &&
        payload.payload.password.length >= 5
      ) {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;

