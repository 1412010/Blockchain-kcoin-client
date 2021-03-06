import React from "react";
import { connect } from "react-redux";
import { Redirect, Link, withRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./smaller/navbar";
import { Sidebar } from "./smaller/sidebar";
import { TransactionTable } from "./smaller/transTable";
import { Error, Success } from "./smaller/warnings";
import { reduxForm, Field } from "redux-form";
import { InputText } from "./smaller/InputField";
import { updateMyWallet, getOwnTrans, submitLogout, submitSendCoins, checkLogin, submitDeleteTrans } from "../actions";
import ModalSend from "./smaller/ModalSend";
import ModalVerify from "./smaller/ModalVerify";
import TransactionDetail from "./smaller/transDetail"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getOwnTrans());
    }

    onRefreshData = () => {
        this.props.dispatch(checkLogin())
        this.props.dispatch(getOwnTrans())
    }

    render() {
        const myState = this.props.account;
        if (!myState.isLoggedIn) {
            return (
                <Redirect to="/login" />
            );
        }
        const myTrans = this.props.trans;
        return (
            <div>
                <Navbar address={myState.address} email={myState.email} onClickSignOut={this.props.onClickSignOut} />
                <div className="container-fluid">
                    <div className="row" >
                        <Sidebar onClickSignOut={this.props.onClickSignOut} isAdmin={myState.isAdmin} onRefresh={this.onRefreshData}/>
                        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3 px-4" style={{ marginTop: "5%" }}>
                            <Switch>
                                <Route path="/dashboard/transaction/:hash" component={TransactionDetail} />
                                <Route exact path="/dashboard" render={() =>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2 className="heading-bottom-top">Available balance&nbsp;
                                                    <i className="fa fa-usd"></i></h2>
                                                <div className="wrapperBalance" style={{ paddingTop: "10%" }}>
                                                    <h1 style={{ fontSize: "400%", fontWeight: "300" }}>{myState.availBalance} kcoins</h1>
                                                </div>
                                            </div>
                                            <div className="col-md-6" >
                                                <h2 className="heading-bottom-top">Total balance&nbsp;
                                                    <i className="fa fa-usd"></i></h2>
                                                <div className="wrapperBalance" style={{ paddingTop: "10%" }}>
                                                    <h1 style={{ fontSize: "400%", fontWeight: "300" }}>{myState.totalBalance} kcoins</h1>
                                                </div>
                                            </div>

                                        </div>

                                        <TransactionTable trans={myTrans.transTable} address={myState.address} onClickDeleteTrans={this.props.onClickDeleteTrans} title="Your transactions" />
                                    </div>
                                } />
                            </Switch>

                        </main>
                    </div>
                </div>

                <ModalVerify />

                <ModalSend />

                {/* <!-- Account Modal --> */}
                <div className="modal fade" id="accountModal" tabIndex="-1" role="dialog" aria-labelledby="sendModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">ACCOUNT INFOMATION</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div style={{ marginLeft: 50 }}>
                                    <div style={{ marginBottom: 25 }}>
                                        Address: <span style={{ fontWeight: 'bold', marginLeft: 10 }}>{myState.address}</span>
                                    </div>
                                    <div style={{ marginBottom: 25 }}>
                                        Email: <span style={{ fontWeight: 'bold', marginLeft: 30 }}>{myState.email}</span>
                                    </div>
                                    <div style={{ marginBottom: 25 }}>
                                        Total balance: <span style={{ fontWeight: 'bold', marginLeft: 54 }}>{myState.totalBalance}</span> kcoins
                                    </div>
                                    <div>
                                        Available balance: <span style={{ fontWeight: 'bold', marginLeft: 20 }}>{myState.availBalance}</span> kcoins
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" data-dismiss="modal" ref={(input) => { this.closeModal = input; }}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account,
    trans: state.trans
})

const mapDispatchToProps = dispatch => ({
    onClickSignOut: () => dispatch(submitLogout()),
    onClickDeleteTrans: (id) => dispatch(submitDeleteTrans(id)),
    dispatch
})

Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default Dashboard