import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { REQUEST_LOGIN_FAIL, REQUEST_LOGIN_SUCCESS, REQUEST_MY_TRANSACTION_SUCCESS, REQUEST_SIGNUP_SUCCESS, REQUEST_SIGNUP_FAIL, REQUEST_VERIFY_ACCOUNT_FAIL, REQUEST_VERIFY_ACCOUNT_SUCCESS } from "../constants/";

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
}

const initialTransState = {
    transTable: [],
    limit: 5,
    offset: 0
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
        default:
            return {
                ...state,
                ...messageState,
            }
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

        default:
            return state
    }
}

export default combineReducers({
    account,
    trans,
    form: formReducer
});