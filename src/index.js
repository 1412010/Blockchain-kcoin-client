import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import './style.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers';
import LogIn from "./components/Login";
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route exact path="/" component={LogIn} />                
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));