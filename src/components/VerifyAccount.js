import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

import { Error } from "./smaller/warnings";
import { InputText } from "./smaller/InputField";
import { submitLogin, checkLogin } from '../actions';

class VerifyAccount extends React.Component {

    render() {

        return (
            <div className="wrapperLogin">
                <div className="card border-success mb-3" style={{ width: "30%" }}>
                    <div className="card-header text-success">
                        <h3 className="card-title">Verify Account</h3>
                    </div>
                    <div style={{ paddingtop: 30 }} className="card-body" >
                        <Error errMsg="" />
                        <form id="verifyAccForm" className="form-horizontal" onSubmit={this.props.handleSubmit}>
                            <label htmlFor="email" className="font-weight-bold">Please enter the code we have sent  to your email</label>
                            <div style={{ marginBottom: 25 }} className="input-group">
                                <Field name='code' type='text' component={InputText} placeholder='Enter the code...' id='code' required={true} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-success" type="submit">Verify</button>
                                </div>
                            </div>

                            {/* Button sign in */}
                            <div className="form-group">
                                <div className="col-md-12 control">
                                    <div >
                                        Don't have an account?
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

VerifyAccount = reduxForm({
    form: 'verifyAccForm'
})(VerifyAccount);

const mapStateToProps = state => ({
    account: state.account
})

const mapDispatchToProps = dispatch => ({
    onSubmit: values => dispatch(submitLogin(values))
})

VerifyAccount = connect(mapStateToProps, mapDispatchToProps)(VerifyAccount)

export default VerifyAccount