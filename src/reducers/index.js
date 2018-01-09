import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { REQUEST_LOGIN_FAIL, REQUEST_LOGIN_SUCCESS, REQUEST_MY_TRANSACTION_SUCCESS, REQUEST_SIGNUP_SUCCESS, REQUEST_SIGNUP_FAIL, REQUEST_VERIFY_ACCOUNT_FAIL, REQUEST_VERIFY_ACCOUNT_SUCCESS, REQUEST_LOGOUT_SUCCESS, REQUEST_SEND_COINS_FAIL, REQUEST_SEND_COINS_SUCCESS, REQUEST_STATISTICS_SUCCESS, REQUEST_STATISTICS_FAIL, REQUEST_VERIFY_TRANS_SUCCESS, REQUEST_VERIFY_TRANS_FAIL, REQUEST_FORGOT_PW_SUCCESS, REQUEST_FORGOT_PW_FAIL, REQUEST_GET_TRANSACTION_DETAIL } from "../constants/";


const initialAccountState = {
    email: '',
    address: '',
    isAdmin: false,
    totalBalance: 0,
    availBalance: 0,
    isLoggedIn: false,
    isError: false,
}

const messageState = {
    errorMsg_Login: '',
    successMsg_Login: '',
    errorMsg_Verify: '',
    successMsg_Verify: '',
    errorMsg_Signup: '',
    successMsg_Signup: '',
    errorMsg_ForgotPW: '',
    successMsg_ForgotPW: '',
    errorMsg_SendCoin: '',
    successMsg_SendCoin: '',
    errorMsg_VerifyTrans: '',
    successMsg_VerifyTrans: '',
}

const initialTransState = {
    transTable: [],
    transDetail: {}
}

const initialStatisticsState = {
    numberOfAcc: 0,
    sumRealBalance: 0,
    sumAvailableBalance: 0
}

const initialAllAccountsState = {
    accountTable: []
}

const initialAllAddressesState = {
    addressTable: []
}

const account = (state = initialAccountState, action) => {
    switch (action.type) {

        case REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                ...messageState,
                isLoggedIn: true,
                email: action.data.email,
                address: action.data.address,
                isAdmin: action.data.role == 1,
                totalBalance: action.data.realBalance,
                availBalance: action.data.availableBalance,
                isError: false
            }
        case REQUEST_LOGIN_FAIL:
            return {
                ...state,
                ...messageState,
                isError: true,
                errorMsg_Login: action.error
            }
        case REQUEST_SIGNUP_FAIL:
            return {
                ...state,
                ...messageState,
                errorMsg_Signup: action.error
            }
        case REQUEST_SIGNUP_SUCCESS:
            return {
                ...state,
                ...messageState,
                successMsg_Signup: action.msg
            }
        case REQUEST_VERIFY_ACCOUNT_SUCCESS:
            return {
                ...state,
                ...messageState,
                successMsg_Verify: action.msg
            }
        case REQUEST_VERIFY_ACCOUNT_FAIL:
            return {
                ...state,
                ...messageState,
                errorMsg_Verify: action.error
            }
        case REQUEST_LOGOUT_SUCCESS:
            return {
                ...initialAccountState,
                ...messageState
            }
        case REQUEST_SEND_COINS_FAIL:
            return {
                ...state,
                ...messageState,
                errorMsg_SendCoin: action.error
            }
        case REQUEST_SEND_COINS_SUCCESS:
            return {
                ...state,
                ...messageState,
                successMsg_SendCoin: action.msg
            }
        case REQUEST_VERIFY_TRANS_SUCCESS:
            return {
                ...state,
                ...messageState,
                successMsg_VerifyTrans: action.msg
            }
        case REQUEST_VERIFY_TRANS_FAIL:
            return {
                ...state,
                ...messageState,
                errorMsg_VerifyTrans: action.error
            }
        case REQUEST_FORGOT_PW_SUCCESS:
            return {
                ...state,
                ...messageState,
                successMsg_ForgotPW: action.msg
            }
        case REQUEST_FORGOT_PW_FAIL:
            return {
                ...state,
                ...messageState,
                errorMsg_ForgotPW: action.error
            }
        default:
            return state
    }
}

const trans = (state = initialTransState, action) => {
    switch (action.type) {
        case REQUEST_MY_TRANSACTION_SUCCESS:
            return {
                ...state,
                transTable: action.data
            }
            break;
        case 'REQUEST_ALL_TRANSACTION_SUCCESS':
            return {
                ...state,
                transTable: action.data
            }
            break;
        case REQUEST_GET_TRANSACTION_DETAIL: 
            return {
                ...state,
                transDetail: action.data
            }
        default:
            return state
    }
}

const statistics = (state = initialStatisticsState, action) => {
    switch (action.type) {
        case REQUEST_STATISTICS_SUCCESS:
            return {
                ...state,
                numberOfAcc: action.data.numberOfAcc,
                sumRealBalance: action.data.sumRealBalance,
                sumAvailableBalance: action.data.sumAvailableBalance
            }
        default:
            return state
    }
}

const allAccounts = (state = initialAllAccountsState, action) => {
    switch (action.type) {
        case 'REQUEST_ALL_ACCOUNTS_SUCCESS':
            return {
                ...state,
                accountTable: action.data
            }
        default:
            return state
    }
}

const allAddresses = (state = initialAllAddressesState, action) => {
    switch (action.type) {
        case 'REQUEST_ALL_ADDRESSES_SUCCESS':
            return {
                ...state,
                addressTable: action.data
            }
        default:
            return state
    }
}

export default combineReducers({
    account,
    trans,
    statistics,
    allAccounts,
    allAddresses,
    form: formReducer
});