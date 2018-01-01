import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import {} from "../constants";

const initialState = {

}

const login = (state = initialState, action) => {
    switch (action.type)
    {
        default: 
            return state;
    }
}

export default combineReducers({
    login,
    form: formReducer
});