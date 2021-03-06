export const SERVER_URL = ''//'http://localhost:5000'//'https://blockchain-kcoin-hat.herokuapp.com'

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
export const REQUEST_LOGOUT_SUCCESS = 'REQUEST_LOGOUT_SUCCESS'

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'
export const REQUEST_SIGNUP_SUCCESS = 'REQUEST_SIGNUP_SUCCESS'
export const REQUEST_SIGNUP_FAIL = 'REQUEST_SIGNUP_FAIL'

export const REQUEST_MY_TRANSACTION_SUCCESS = 'REQUEST_MY_TRANSACTION_SUCCESS'
export const REQUEST_MY_TRANSACTION_FAIL = 'REQUEST_MY_TRANSACTION_FAIL'

export const REQUEST_VERIFY_ACCOUNT_SUCCESS = 'REQUEST_VERIFY_ACCOUNT_SUCCESS'
export const REQUEST_VERIFY_ACCOUNT_FAIL= 'REQUEST_VERIFY_ACCOUNT_FAIL'

export const REQUEST_VERIFY_TRANS_SUCCESS = 'REQUEST_VERIFY_TRANS_SUCCESS'
export const REQUEST_VERIFY_TRANS_FAIL = 'REQUEST_VERIFY_TRANS_FAIL'

export const REQUEST_STATISTICS_SUCCESS = 'REQUEST_STATISTICS_SUCCESS'
export const REQUEST_STATISTICS_FAIL = 'REQUEST_STATISTICS_FAIL'

export const REQUEST_SEND_COINS_SUCCESS = 'REQUEST_SEND_COINS_SUCCESS'
export const REQUEST_SEND_COINS_FAIL = 'REQUEST_SEND_COINS_FAIL'

export const REQUEST_FORGOT_PW_SUCCESS = 'REQUEST_FORGOT_PW_SUCCESS'
export const REQUEST_FORGOT_PW_FAIL = 'REQUEST_FORGOT_PW_FAIL'

export const REQUEST_GET_TRANSACTION_DETAIL = 'REQUEST_GET_TRANSACTION_DETAIL'