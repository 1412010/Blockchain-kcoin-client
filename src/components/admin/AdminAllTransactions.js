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
import { getAllAccounts, submitLogout, getAllTrans } from "../../actions";

class AdminAllTransactions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // myState.isLoggedIn = fakeAuth.isAuthenticated;
        // myState.wallet_id = fakeAuth.wallet_id;
        this.props.dispatch(getAllTrans());
    }

    render() {
        const myState = this.props.account;
        
        const myTrans = this.props.trans;

        return (
            <div>
                <h2 className="heading-bottom-top">All transactions&nbsp;
                 <i className="fa fa-retweet"></i>
                </h2>
                <TransactionTable trans={myTrans.transTable} myid={myState.address} />
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