export const GET_CLAIMS =           'GET_CLAIMS'
export const GET_CLAIMS_SUCCESS =   'GET_CLAIMS_SUCCESS'
export const GET_CLAIMS_FAILURE =   'GET_CLAIMS_FAILURE'

export const getClaims = () => ({
    type: GET_CLAIMS,
})

export const getClaimsSuccess = (claims) => ({
    type: GET_CLAIMS_SUCCESS,
    payload: claims,
})

export const getClaimsFailure = () => ({
    type: GET_CLAIMS_FAILURE,
})