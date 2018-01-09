import axios from "axios";
import "whatwg-fetch";
import { AXIOS_CONFIG, SERVER_URL } from "../constants/";

const requestAllAccounts = data => ({
    type: 'REQUEST_ALL_ACCOUNTS_SUCCESS',
    data
})

export const getAllAccounts = values => (dispatch, getState) => {
    axios({
        ...AXIOS_CONFIG,
        method: 'post',
        data: '',
        url: SERVER_URL + '/GetAllAccounts'
    }).then(result => {
        dispatch(requestAllAccounts(result.data));
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        }
    })
}

const requestAllAddresses = data => ({
    type: 'REQUEST_ALL_ADDRESSES_SUCCESS',
    data
})

export const getAllAddresses = values => (dispatch, getState) => {
    axios({
        ...AXIOS_CONFIG,
        method: 'post',
        data: '',
        url: SERVER_URL + '/GetAllAddressSystem'
    }).then(result => {
        dispatch(requestAllAddresses(result.data));
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        }
    })
}