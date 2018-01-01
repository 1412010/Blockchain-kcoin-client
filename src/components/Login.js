import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

import { Error } from "./warnings";
import { InputText } from "./InputField";
import { checkAccount } from '../actions';

class LogIn extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="wrapperLogin">
                <div className="card border-success mb-3" style={{ width: "30%" }}>
                    <div className="card-header text-success">
                        <h3 className="card-title">Please Log In</h3>
                    </div>
                    <div style={{ paddingtop: 30 }} className="card-body" >
                        <Error errMsg="" />
                        <form id="loginform" className="form-horizontal">
                            {/* Email */}
                            <label htmlFor="email" className="font-weight-bold">Email</label>
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <Field name='email' type='email' component={InputText} placeholder='Please input your E-mail' id='email' required={true} />
                            </div>
                            {/* Password */}
                            <label htmlFor="password" className="font-weight-bold">Password</label>
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <Field id="password" name='password' type='password' component={InputText} placeholder='Please input your password...' required={true} />
                            </div>
                            <Link to="/signup">
                                &nbsp;Forgot Password?
                            </Link>
                            {/* Button sign in */}
                            <div className="input-group">
                                <button style={{ width: "100%" }} className="btn btn-success" type="submit">Log In</button>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12 control">
                                    <div style={{ borderTop: 1, paddingTop: 15 }} >
                                        Don't have an account!
                                        <Link to="/signup">
                                            &nbsp;Sign Up Here
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
    state
})

const mapDispatchToProps = dispatch => ({

})

LogIn =
    connect(mapStateToProps, mapDispatchToProps)(LogIn)

export default LogIn