import { userActionTypes } from './user.type';
const INIATIAL_STATE = {
    currentUser:null
}

const userReducer = (state= INIATIAL_STATE, action)=>{
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload
            }

            default:
                return state;
        
    }
}

export default userReducer;