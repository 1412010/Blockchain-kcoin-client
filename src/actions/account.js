import { SERVER_URL, REQUEST_LOGIN_FAIL, REQUEST_LOGIN_SUCCESS, AXIOS_CONFIG, REQUEST_SIGNUP_FAIL, REQUEST_SIGNUP_SUCCESS, REQUEST_VERIFY_ACCOUNT_FAIL, REQUEST_VERIFY_ACCOUNT_SUCCESS, REQUEST_STATISTICS  } from "../constants/";
import axios from "axios";
import "whatwg-fetch";

const LoginSucess = data => ({
    type: REQUEST_LOGIN_SUCCESS,
    data
})

const LoginFail = error => ({
    type: REQUEST_LOGIN_FAIL,
    error
})

const SignUpFail = error => ({
    type: REQUEST_SIGNUP_FAIL,
    error
})

const SignUpSuccess = (msg) => ({
    type: REQUEST_SIGNUP_SUCCESS,
    msg
})

const VerifyAccountSuccess = (msg) => ({
    type: REQUEST_VERIFY_ACCOUNT_SUCCESS,
    msg
})

const VerifyAccountFail = (error) => ({
    type: REQUEST_VERIFY_ACCOUNT_FAIL,
    error
})

export const submitLogin = values => (dispatch, getState) => {
    var data = {
        email: values.email,
        password: values.password
    }

    axios({
        ...AXIOS_CONFIG,
        method: 'post',
        url: SERVER_URL + '/Login',
        data: data,
    }).then(result => {
        console.log(result);
        dispatch(LoginSucess(result.data));
    }).catch(error => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
            dispatch(LoginFail(error.response.data.message));
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        }
    });
}

export const checkLogin = () => (dispatch, getState) => {
    console.log('check login');

    axios({
        ...AXIOS_CONFIG,
        method: 'get',
        url: SERVER_URL + '/checkLogin',
    }).then(result => {
        console.log(result);
        dispatch(LoginSucess(result.data));
    }).catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
            dispatch(LoginFail(error.response.data.message));
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        }
    })
}

export const submitLogout = () => (dispatch, getState) => {
    
}

export const submitVerifyAccount = (values) => (dispatch, getState) => {
    axios({
        ...AXIOS_CONFIG,
        method: 'post',
        url: SERVER_URL + '/ConfirmAccount',
        data: { code: values.code }
    }).then(result => {
        console.log(result);
        dispatch(VerifyAccountSuccess(result.data.message));
    }).catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
            dispatch(VerifyAccountFail(error.response.data.message));
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        }
    })
}

export const submitSignUp = (values) => (dispatch, getState) => {

    if (values.password !== values.confirmPassword) {
        console.log('password fail');
        return dispatch(SignUpFail("Confirm Password doesn't match!"))
    }

    var data = {
        email: values.email,
        password: values.password
    }

    axios({
        ...AXIOS_CONFIG,
        method: 'put',
        url: SERVER_URL + '/Register',
        data: data,
    }).then(result => {
        console.log(result);
        dispatch(SignUpSuccess("Sign up Successfully! Please verify your account!"));
    }).catch(error => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
            dispatch(SignUpFail(error.response.data.message));
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        }
    });
}