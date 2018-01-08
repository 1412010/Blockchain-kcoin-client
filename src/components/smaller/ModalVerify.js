import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { InputText } from "./InputField";
import { Error, Success } from "./warnings";
import { submitSendCoins } from "../../actions";

class ModalVerify extends React.Component {

    onSubmitSendCoin = (e) => {
        e.preventDefault();
        alert('sendcoin');
    }

    render() {
        const myState = this.props.account
        return (
            <div className="modal fade" id="sendModal" tabIndex="-1" role="dialog" aria-labelledby="sendModalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">SEND COINS</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id='formVerifyTrans' onSubmit={this.props.handleSubmit}>
                                <Error errMsg={myState.errorMsg_SendCoin} />
                                <Success errMsg={myState.successMsg_SendCoin}/>
                                <div className="form-group">
                                    <label htmlFor="toAddress" className="col-form-label font-weight-bold">To address:</label>
                                    <Field type="text" name="toAddress" id="toAddress" required component={InputText} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="value" className="col-form-label font-weight-bold">Values:</label>
                                    <Field type="number" name="value" className="form-control col-md-5" id="value" required min={1} max={myState.availBalance} value={0} component={InputText} />
                                </div>
                                <input type="submit" id="input-form-submit" style={{ display: 'none' }} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={(input) => { this.closeModal = input; }}>Cancel</button>
                            <label htmlFor="input-form-submit" role="button" className="btn btn-primary mt-2"> Send coins</label>
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
    onSubmit: values => dispatch(submitSendCoins(values))
})

ModalVerify =
    connect(mapStateToProps, mapDispatchToProps)(ModalVerify)

export default ModalVerify