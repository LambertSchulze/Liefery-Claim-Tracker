import * as actions from '../actions/claimsActions'

export const initialState = {
    claims:     [{
        claimID:        1,
        status:         'opened',
        openDate:       '01.01.2020',
        lieferyID:      'ABCDE/12345',
        courierName:    'Josip Ramljak',
    },
    {
        claimID:        2,
        status:         'übergeben',
        openDate:       '02.02.2020',
        lieferyID:      'FGHIJ/67890',
        courierName:    'Mehmet Kaplan',
    }],
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