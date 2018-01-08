import React from "react";
import { connect } from "react-redux";
import { Redirect, Link, BrowserRouter, withRouter } from "react-router-dom";
import { AdminNavbar } from "../smaller/AdminNavbar";
import { AdminSidebar } from "../smaller/AdminSidebar";
import axios from "axios";
import { TransactionTable } from "../smaller/transTable";
import { Error } from "../smaller/warnings";
import { reduxForm, Field } from "redux-form";
import { InputText } from "../smaller/InputField";
import { getAllAccounts, submitLogout, } from "../../actions";

class AdminAllAccounts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // myState.isLoggedIn = fakeAuth.isAuthenticated;
        // myState.wallet_id = fakeAuth.wallet_id;
        //this.props.dispatch(getAllAccounts());
    }

    render() {
        
        const myTrans = this.props.trans;

        return (
            <div>
                <h2 className="heading-bottom-top">All accounts&nbsp;
                 <i className="fa fa-user"></i>
                </h2>
                {/* <TransactionTable addresses={this.props.allAccounts} /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account,
    trans: state.trans,
    allAccounts: state.allAccounts
})

const mapDispatchToProps = dispatch => ({
    onClickSignOut: () => dispatch(submitLogout()),
    dispatch
})

AdminAllAccounts = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminAllAccounts))

export default AdminAllAccounts