import { combineReducers } from 'redux'

/*
const userReducer = (state = {authenticated: false, userName: none}, action) => {
    switch(action.type) {
      case LOGIN:
        return {
          authenticated: true,
          userName: action.userName
        }
      case LOGOUT:
        return {
          authenticated: false,
          userName: none
        }
      default:
        return state;
    }
  };

const claimReducer = 
  ...
  case CREATE_NEW_CLAIM:
  ...
*/

const rootReducer = combineReducers({
    /*
    user: userReducer,
    claim: claimReducer
    */
})

export default rootReducer