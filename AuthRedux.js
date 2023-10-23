import { createSlice , configureStore} from "@reduxjs/toolkit";
const initialToken=localStorage.getItem('token');
const initialAuthState={
    isAuthenticated:!!initialToken,
    token:initialToken,
    
};
// const[token,setToken]=useState(initialToken);
const authSlice=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    userIsLoggedIn:!!initialToken,
   
    reducers:{

        login(state,action){
           state.token=action.payload;
           state.isAuthenticated=true;
           localStorage.setItem('token',action.payload);
    
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
          },
    }
});
const store=configureStore({
    reducer:{auth:authSlice.reducer}
});
export const authActions=authSlice.actions;
export default store;

