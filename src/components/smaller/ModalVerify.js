import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { InputText } from "./InputField";
import { Error, Success } from "./warnings";
import { submitSendCoins, submitVerifyTransaction } from "../../actions";

class ModalVerify extends React.Component {

    render() {
        const myState = this.props.account
        console.log(myState)
        return (
            <div className="modal fade" id="verifyModal" tabIndex="-1" role="dialog" aria-labelledby="verifyModalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Verify transaction</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id='formVerifyTrans' onSubmit={this.props.handleSubmit}>
                                <Error errMsg={myState.errorMsg_VerifyTrans} />
                                <Success errMsg={myState.successMsg_VerifyTrans} />
                                <label className="col-form-label">Please enter the code of the transaction that we have sent to your email to verify it.</label>                                
                                <div className="form-group">
                                    <label htmlFor="code" className="col-form-label font-weight-bold">Verify code:</label>
                                    <Field type="text" name="code" id="code" minLength={10} required component={InputText} />
                                </div>
                                <input type="submit" id="input-form-submit-verify-trans" style={{ display: 'none' }} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={(input) => { this.closeModal = input; }}>Cancel</button>
                            <label htmlFor="input-form-submit-verify-trans" role="button" className="btn btn-primary mt-2"> Submit coins</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


ModalVerify = reduxForm({
    form: 'formVerifyTrans'
})(ModalVerify)

const mapStateToProps = state => ({
    account: state.account,
})

const mapDispatchToProps = dispatch => ({
    onSubmit: values => dispatch(submitVerifyTransaction(values))
})

ModalVerify =
    connect(mapStateToProps, mapDispatchToProps)(ModalVerify)

export default ModalVerify