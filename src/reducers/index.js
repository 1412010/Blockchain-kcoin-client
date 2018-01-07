import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { REQUEST_LOGIN_FAIL, REQUEST_LOGIN_SUCCESS } from "../constants/index";

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

export default combineReducers({
    account,
    form: formReducer
});