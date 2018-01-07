import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from "../constants";

export const fetchData = () => {
    return {
        type: FETCHING_DATA
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data,
    }
}

export const fetchDataFailure = () => {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export * from "./account"