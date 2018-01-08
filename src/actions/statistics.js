import { AXIOS_CONFIG, SERVER_URL, REQUEST_STATISTICS_SUCCESS, REQUEST_STATISTICS_FAIL } from "../constants/";
import axios from "axios"

const requestStatistics = data => ({
    type: REQUEST_STATISTICS_SUCCESS,
    data
})

export const getStatistics = () => (dispatch, getState) => {
    axios({
        ...AXIOS_CONFIG,
        method: 'post',
        data: '',
        url: SERVER_URL + '/GetSystemStatistic'
    }).then(result => {
        console.log(result.data);
        dispatch(requestStatistics(result.data));
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        }
    })
}