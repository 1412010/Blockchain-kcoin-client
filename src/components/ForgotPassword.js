import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

import { Error } from "./warnings";
import { InputText } from "./InputField";
import { checkAccount } from '../actions';

class ForgotPassword extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="wrapperForgotPassword">
                <div className="card border-info mb-3" style={{ width: "30%" }}>
                    <div className="card-header text-info">
                        <h3 className="card-title">Get a new password</h3>
                    </div>
                    <div style={{ paddingtop: 30 }} className="card-body" >
                        <Error errMsg="" />
                        <form id="forgotpassform" className="form-horizontal">
                            <div style={{ marginBottom: 25 }}>
                                An email with the new password will be sent to the email address you entered.
                            </div>
                            {/* Email */}
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <Field name='email' type='email' component={InputText} placeholder='Enter your email address...' id='email' required={true} />
                            </div>
                            {/* Button send email */}
                            <div className="input-group">
                                <button style={{ width: "100%" }} className="btn btn-info" type="submit">Send</button>
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
    state
})

const mapDispatchToProps = dispatch => ({

})

ForgotPassword =
    connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)

export default ForgotPassword