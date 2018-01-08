import React from "react";
import { connect } from "react-redux";
import { Redirect, Link, BrowserRouter } from "react-router-dom";
import { AdminNavbar } from "../smaller/AdminNavbar";
import { AdminSidebar } from "../smaller/AdminSidebar";
import axios from "axios";
import { TransactionTable } from "../smaller/transTable";
import { Error } from "../smaller/warnings";
import { reduxForm, Field } from "redux-form";
import { InputText } from "../smaller/InputField";
import { getAllTrans, submitLogout, } from "../../actions";

class AdminAllTransactions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // myState.isLoggedIn = fakeAuth.isAuthenticated;
        // myState.wallet_id = fakeAuth.wallet_id;
        this.props.dispatch(getAllTrans());
    }

    componentDidMount() {
        //this.props.dispatch(updateMyWallet());
    }

    render() {
        const myState = this.props.account;
        if (!myState.isLoggedIn) {
            return (
                <Redirect to="/login" />
            );
        }
        if (!myState.isAdmin) {
            return (
                <div>
                    <h1>403 FORBIDDEN</h1>
                    <h2>You are unauthorized</h2>
                </div>
            );
        }
        const myTrans = this.props.trans;

        return (
            <div>
                <AdminNavbar />
                <div className="container-fluid">
                    <div className="row" >
                        <AdminSidebar address={myState.address} email={myState.email} onClickSignOut={this.props.onClickSignOut} />
                        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3 px-4" style={{ marginTop: "5%" }}>
                            {(() => {
                                return (
                                    <div>
                                        <h2 className="heading-bottom-top">All transactions&nbsp;
                                            <i className="fa fa-retweet"></i>
                                        </h2>
                                        <TransactionTable trans={myTrans.transTable} myid={myState.address} />
                                    </div>
                                );
                            })()}
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account,
    trans: state.trans,
})

const mapDispatchToProps = dispatch => ({
    onClickSignOut: () => dispatch(submitLogout()),
    dispatch
})

AdminAllTransactions = connect(mapStateToProps, mapDispatchToProps)(AdminAllTransactions)

export default AdminAllTransactions