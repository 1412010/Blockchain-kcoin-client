import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Navbar } from "./smaller/navbar";
import { Sidebar } from "./smaller/sidebar";
import axios from "axios";
import { TransactionTable } from "./smaller/transTable";
import { Error } from "./smaller/warnings";
import { reduxForm, Field } from "redux-form";
import { InputText } from "./smaller/InputField";
import { updateMyWallet } from "../actions";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet_id: '',
            email: '',
            balance: 0,
            isLoggedIn: true,
            trans: [],
            isInSysTrans: false,
            sysTrans: [],
            sendTowallet_id: "",
            sendNumCoin: 0,
            errorSend: ""
        }
    }

    componentWillMount() {
        // myState.isLoggedIn = fakeAuth.isAuthenticated;
        // myState.wallet_id = fakeAuth.wallet_id;
    }

    componentDidMount() {
        //this.props.dispatch(updateMyWallet());
    }

    render() {
        const myState = this.state;
        if (!myState.isLoggedIn) {
            return (
                <Redirect to="/login" />
            );
        }
        return (
            <div>
                <Navbar wallet_id={myState.wallet_id} email={myState.email} onClickSignOut={null}/>
                <div className="container-fluid">
                    <div className="row" >
                        <Sidebar onClickSysTrans={null} onClickNotSysTrans={null} onClickSignOut={null}/>
                        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3 px-4" style={{ marginTop: "5%" }}>
                            {(() => {
                                if (!myState.isInSysTrans) {
                                    return (
                                        <div>
                                            <h2 className="heading-bottom-top">Your balance&nbsp;
                                            <i className="fa fa-usd"></i>
                                            </h2>
                                            <div className="wrapperBalance">
                                                <h1 style={{ fontSize: "500%", fontWeight: "300" }}>{myState.balance} coins</h1>
                                            </div>
                                            <h2 className="heading-bottom-top">Your transactions&nbsp;
                                            <i className="fa fa-retweet"></i>
                                            </h2>
                                            <TransactionTable trans={myState.trans} myid={myState.wallet_id}/>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div>
                                            <h2 className="heading-bottom-top">All transaction in system&nbsp;
                                            <i className="fa fa-retweet"></i>
                                            </h2>
                                            <TransactionTable trans={myState.sysTrans} myid={myState.wallet_id}/>
                                        </div>
                                    );
                                }
                            })()}
                        </main>
                    </div>
                </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="sendModal" tabIndex="-1" role="dialog" aria-labelledby="sendModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">SEND COINS</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={null} id='formSendCoin'>
                                    <Error errMsg={myState.errSend} />
                                    <div className="form-group">
                                        <label htmlFor="toID" className="col-form-label font-weight-bold">To wallet_id:</label>
                                        <Field type="text" name="sendToId" id="toID" required component={InputText} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label font-weight-bold">No. of Coins:</label>
                                        <Field type="number" name="sendNumCoin" className="form-control col-md-5" id="recipient-name" required min={1} max={myState.balance} value={0} component={InputText}/>
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
            </div>
        );
    }
}

Dashboard = reduxForm({
    form: 'formSendCoin'
})(Dashboard)

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    
})

Dashboard = 
    connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default Dashboard