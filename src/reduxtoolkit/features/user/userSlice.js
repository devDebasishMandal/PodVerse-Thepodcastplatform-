import { createSlice } from "@reduxjs/toolkit";
// creating slice using the function createSlice


const initialState = {
    //
  user: null,
};

const userSlice = createSlice({
  name: "user", // nameOFtheSlice
  initialState: initialState,
  reducers: {  //functions that contain the actions 
    setUser: (state, action) => {
        //state is the original state 
        //action contains the data
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const {setUser,clearUser} = userSlice.actions;
export default userSlice.reducer;
