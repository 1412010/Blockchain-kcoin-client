export const SERVER_URL = 'http://localhost:5000'

export const AXIOS_CONFIG = {
    method: 'get',
    responseType: 'json',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGIN_FAIL = 'REQUEST_LOGIN_FAIL'

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const REQUEST_SIGNUP_SUCCESS = 'REQUEST_SIGNUP_SUCCESS'
export const REQUEST_SIGNUP_FAIL = 'REQUEST_SIGNUP_FAIL'

export const REQUEST_MY_TRANSACTION_SUCCESS = 'REQUEST_MY_TRANSACTION_SUCCESS'
export const REQUEST_MY_TRANSACTION_FAIL = 'REQUEST_MY_TRANSACTION_FAIL'
