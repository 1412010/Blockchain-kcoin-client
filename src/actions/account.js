import { SERVER_URL, REQUEST_LOGIN_FAIL, REQUEST_LOGIN_SUCCESS } from "../constants/index";
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
        method: 'post',
        url: SERVER_URL + '/Login',
        responseType: 'json',
        data: data,
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
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
        method: 'get',
        url: SERVER_URL + '/checkLogin',
        responseType: 'json',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
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