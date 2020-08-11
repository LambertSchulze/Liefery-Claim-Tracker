import * as actions from '../actions/claimsActions'

export const initialState = {
    claims:     [],
    loading:    false,
    hasErrors:  false,
}

export default function claimsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_CLAIMS:
            return {...state, loading: true}
        case actions.GET_CLAIMS_SUCCESS:
            return {claims: action.payload, loading: false, hasErrors: false}
        case actions.GET_CLAIMS_FAILURE:
            return {...state, loading: false, hasErrors: true}
        default:
            return state
    }
}