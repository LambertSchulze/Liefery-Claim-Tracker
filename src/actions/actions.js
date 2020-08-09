// define action types
const LOGIN                 = 'LOGIN'
const LOGOUT                = 'LOGOUT'
const WRITING_NEW_CLAIM     = 'WRITING_NEW_CLAIM'
const SAVED_NEW_CLAIM       = 'SAVED_NEW_CLAIM'


// action creators 
const loginAction = () => {
    return {
        type: LOGIN // the value of an action type is always a const variable defined above
    };
};
const logoutAction = () => { return {type: LOGOUT} };
const writingNewClaimAction = () => { return {type: WRITING_NEW_CLAIM} };
const savedNewClaimAction = (newClaimObject) => { return {type: SAVED_NEW_CLAIM, data: newClaimObject} };

const createNewClaimAction = (newClaimObject) => {
    return function(dispatch) { // asynchronus actions return a function
        dispatch(writingNewClaimAction()); // let store know something is requested. This could be shown visualy

        // simulate writing to database
        setTimeout(function() {
            // databaseWrite(newClaimObject);
            dispatch(savedNewClaimAction(newClaimObject));
        }, 2500);
    }
}