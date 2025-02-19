import {createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk }from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
import { LoginReducer } from './Reducer/UserReducer';
 const rootReducer=combineReducers({
    LoginReducer:LoginReducer,
 })
 const Middleware=[thunk];
 const store=createStore(
    rootReducer,
    applyMiddleware(...Middleware),
 )
 export default store;