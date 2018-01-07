import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { REQUEST_LOGIN_FAIL, REQUEST_LOGIN_SUCCESS, REQUEST_MY_TRANSACTION_SUCCESS } from "../constants/";

const initialAccountState = {
    email: '',
    address: '',
    isAdmin: false,
    totalBalance: 0,
    availBalance: 0,
    isLoggedIn: false,
    isError: false,
    errorMsg: '',
    transTable: []
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
                isError: true,
                errorMsg: action.err
            }
        default:
            return state;
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