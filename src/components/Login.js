import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

import { Error } from "./smaller/warnings";
import { InputText } from "./smaller/InputField";
import { submitLogin, checkLogin } from '../actions';

class LogIn extends React.Component {
    componentWillMount() {
        this.props.dispatch(checkLogin())
    }

    render() {
        const myState = this.props.account;
        console.log(this.props);        
        if (myState.isLoggedIn/* && !myState.isAdmin*/) {
            return (
                <Redirect to="/dashboard"/>
            );
        }
        /*if (myState.isLoggedIn && myState.isAdmin) {
            return (
                <Redirect to="/admin"/>
            );
        }*/
        return (
            <div className="wrapperLogin">
                <div className="card border-success mb-3" style={{ width: "30%" }}>
                    <div className="card-header text-success">
                        <h3 className="card-title">Log in</h3>
                    </div>
                    <div style={{ paddingtop: 30 }} className="card-body" >
                        <Error errMsg={myState.errorMsg_Login} />
                        <form id="loginform" className="form-horizontal" onSubmit={this.props.handleSubmit}>
                            {/* Email */}
                            <label htmlFor="email" className="font-weight-bold">Email</label>
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <Field name='email' type='email' component={InputText} placeholder='Enter your email address...' id='email' required={true} />
                            </div>
                            {/* Password */}
                            <label htmlFor="password" className="font-weight-bold">Password</label>
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <Field id="password" name='password' type='password' component={InputText} placeholder='Enter your password...' required={true} minLength={6} maxLength={32}/>
                            </div>
                            <Link to="/forgotpassword">
                                &nbsp;Forgot Password?
                            </Link>
                            {/* Button sign in */}
                            <div className="input-group">
                                <button style={{ width: "100%" }} className="btn btn-success" type="submit">Log In</button>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12 control">
                                    <div style={{ borderTop: 1, paddingTop: 15 }} >
                                        Don't have an account?
                                        <Link to="/signup">
                                            &nbsp;Sign Up Here
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12 control">
                                    <div  >
                                        Account isn't verified yet? 
                                        <Link to="/verifyAccount">
                                            &nbsp;Verify here
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

LogIn = reduxForm({
    form: 'loginform'
})(LogIn);

const mapStateToProps = state => ({
    account: state.account
})

const mapDispatchToProps = dispatch => ({
    onSubmit: values => dispatch(submitLogin(values))
})

LogIn = connect(mapStateToProps, mapDispatchToProps)(LogIn)

export default LogIn