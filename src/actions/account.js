import { SERVER_URL, REQUEST_LOGIN_FAIL, REQUEST_LOGIN_SUCCESS, AXIOS_CONFIG } from "../constants/";
import axios from "axios";
import "whatwg-fetch";

const LoginSucess = data => ({
    type: REQUEST_LOGIN_SUCCESS,
    data
})

const LoginFail = err => ({
    type: REQUEST_LOGIN_FAIL,
    err
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
        console.log(error);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
            dispatch(LoginFail(error.response.data));
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
            dispatch(LoginFail(error.response.data));
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        }
    })
}