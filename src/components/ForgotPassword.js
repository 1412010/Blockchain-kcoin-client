import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

import { Error, Success } from "./smaller/warnings";
import { InputText } from "./smaller/InputField";
import { checkAccount, submitForgotPW } from '../actions';

class ForgotPassword extends React.Component {

    render() {
        const myState = this.props.account
        console.log(myState);
        return (
            <div className="wrapperForgotPassword">
                <div className="card border-info mb-3" style={{ width: "30%" }}>
                    <div className="card-header text-info">
                        <h3 className="card-title">Get a new password</h3>
                    </div>
                    <div style={{ paddingtop: 30 }} className="card-body" >
                        <Error errMsg={myState.errorMsg_ForgotPW} />
                        <Success errMsg={myState.successMsg_ForgotPW} />
                        <form id="forgotpassform" className="form-horizontal" onSubmit={this.props.handleSubmit}>
                            <div style={{ marginBottom: 25 }}>
                                An email with the new password will be sent to the email address you entered.
                            </div>
                            {/* Email */}
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-envelope-o"></i></span>
                                </div>
                                <Field name='email' type='email' component={InputText} placeholder='Enter your email address...' id='email' required={true} />
                            </div>
                            {/* Button send email */}
                            <div className="input-group">
                                <button style={{ width: "100%" }} className="btn btn-info" type="submit">Reset Password</button>
                            </div>

                            {/* Button log in */}
                            <div className="form-group">
                                <div className="col-md-12 control">
                                    <div >
                                        Reset complete?
                                        <Link to="/login">
                                            &nbsp;Log in here
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

ForgotPassword = reduxForm({
    form: 'forgotpassform'
})(ForgotPassword);

const mapStateToProps = state => ({
    account: state.account
})

const mapDispatchToProps = dispatch => ({
    onSubmit: values => dispatch(submitForgotPW(values))
})

ForgotPassword =
    connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)

export default ForgotPassword