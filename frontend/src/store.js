import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk }from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { LoginReducer } from './Reducer/UserReducer';
 const rootReducer=combineReducers({
    LoginReducer:LoginReducer,
 })
 const initialstate={
   otpVerifyReducer:{
   
   }
 }
 const Middleware=[thunk];
 const store=legacy_createStore(
    rootReducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...Middleware))
 )
 export default store;