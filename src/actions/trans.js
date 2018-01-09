import { REQUEST_MY_TRANSACTION_SUCCESS, REQUEST_MY_TRANSACTION_FAIL, AXIOS_CONFIG, SERVER_URL, REQUEST_SEND_COINS_FAIL, REQUEST_GET_TRANSACTION_DETAIL } from "../constants/";
import axios from "axios";
import values from "redux-form/lib/values";

const requestMyTransSuccess = data => ({
    type: REQUEST_MY_TRANSACTION_SUCCESS,
    data
})

const requestGetTransDetail = data => ({
    type: REQUEST_GET_TRANSACTION_DETAIL,
    data
})

export const getOwnTrans = () => (dispatch, getState) => {
    axios({
        ...AXIOS_CONFIG,
        method: 'post',
        data: '',
        url: SERVER_URL + '/GetOwnTransactions'
    }).then(result => {
        dispatch(requestMyTransSuccess(result.data));
    }).catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
            //dispatch(LoginFail(error.response.data));
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        }
    })
}

const requestAllTransSuccess = data => ({
    type: 'REQUEST_ALL_TRANSACTION_SUCCESS',
    data
})

export const getAllTrans = () => (dispatch, getState) => {
    axios({
        ...AXIOS_CONFIG,
        method: 'post',
        data: '',
        url: SERVER_URL + '/GetSystemTransactions'
    }).then(result => {
        dispatch(requestMyTransSuccess(result.data));
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        }
    })
}

export const getTransDetail = hash => (dispatch, getState) => {
    axios({
        ...AXIOS_CONFIG,
        method: 'get',
        url: SERVER_URL + '/transaction/' + hash
    }).then(result => {
        console.log(result);
        dispatch(requestGetTransDetail(result.data));
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        }
    })
}