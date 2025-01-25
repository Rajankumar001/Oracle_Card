import axios from 'axios';
const baseUrl = "http://localhost:8080/";
export const UserAction=(user)=>async dispatch=>{
  dispatch({type:'SIGNIN_REQUEST'})
  try{
      const response=await axios.post(`${baseUrl}api/User/signin`,user);
      console.log("API Response:", response.data);
     dispatch({type:'SIGNIN_SUCCESS',payload:response.data})
  }catch(err){
     dispatch({type:'SIGNIN_ERROR',payload:err.message})
  }
}
export const logoutUser=()=>dispatch=>{
  localStorage.clear();
  window.location.href='/'
}