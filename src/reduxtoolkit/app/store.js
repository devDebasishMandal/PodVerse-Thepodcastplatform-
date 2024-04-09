import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"

 const store =configureStore({
    reducer:{
        user:userReducer,
        // podcast:podcastReducer,
        // episode:episodeReducer
    },
});




export default store;