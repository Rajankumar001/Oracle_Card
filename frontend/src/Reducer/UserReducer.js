
export const LoginReducer=(state={LoginUser:{}},action)=>{
    switch(action.type){
        case 'SIGNIN_REQUEST':
            return{
                ...state,
               loading:true,
            }
            case 'SIGNIN_SUCCESS':
                console.log("LoginUser  in Reducer:", action.payload);
                return{
                    ...state,
                    loading:false,
                    success:true,
                    LoginUser:action.payload,
                }
                case 'SIGNIN_ERROR':
                    return{
                        ...state,
                        loading:false,
                        err:action.payload
                        
                    }
                    default :return state
                    
    }
}