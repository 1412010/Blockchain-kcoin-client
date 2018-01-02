import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from "react-redux";
import { Error, Success } from "./smaller/warnings";
import { InputText, InputCheckbox } from "./smaller/InputField";

class SignUp extends React.Component {

    render() {
        return (
            <div className="wrapperSignUp">
                <div className="card border-warning mb-3" style={{ width: "30%" }}>
                    <div className="card-header text-warning">
                        <h3 className="card-title">Create your own wallet</h3>
                    </div>

                    <div style={{ paddingtop: 30 }} className="card-body" >

                        <Error errMsg=""/>
                        <Success errMsg=""/>
                        <form id="formSignup" className="form-horizontal">
                            {/* Email */}
                            <label htmlFor="email" className="font-weight-bold">Your Email Address</label>
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <Field  id="email" type="email" component={InputText} name="email" placeholder="Enter your email address..." required={true}/>
                            </div>
                            {/* New Password */}
                            <label htmlFor="pw" className="font-weight-bold">Your New Password</label>
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <Field id="pw" type="password" component={InputText} name="password"  placeholder="Enter your password..." minLength={8} required={true}/>
                            </div>
                            {/* Confirm Password */}
                            <label htmlFor="cfpw" className="font-weight-bold">Confirm your password</label>
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <Field id="cfpw" type="password" component={InputText} name="confirmPassword"  placeholder="Confirm your password..." minLength={8} required={true}/>
                            </div>
                            {/* Checkbox of terms agreement */}
                            <div className="form-check">
                                <label className="form-check-label">
                                    <Field type="checkbox" name="checkBox" component={InputCheckbox} required={true}/>
                                    I have read and agree to the&nbsp; 
                                    <Link to="/terms">Terms of Service</Link>
                                </label>
                            </div>
                            {/* Button sign up */}
                            <div className="input-group">
                                <button style={{ width: "100%" }} className="btn btn-warning" type="submit">Sign Up</button>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12 control">
                                    <div style={{ borderTop: 1, paddingTop: 15 }} >
                                        Already had a account?
                                        <Link to="/login">
                                            &nbsp;Log in.
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

SignUp = reduxForm({
    form: 'formSignup'
})(SignUp)

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    
})

SignUp = 
    connect(mapStateToProps, mapDispatchToProps)(SignUp)

export default SignUp