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
import { getAllAddresses, submitLogout, } from "../../actions";
import { AddressTable } from "../smaller/addressTable";

class AdminAllAddresses extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // myState.isLoggedIn = fakeAuth.isAuthenticated;
        // myState.wallet_id = fakeAuth.wallet_id;
        //this.props.dispatch(getAllAddresses());
    }

    render() {
        const myState = this.props.account;
       
        const myTrans = this.props.trans;

        return (
            <div>
                <h2 className="heading-bottom-top">All addressses&nbsp;
                 <i className="fa fa-address-card"></i>
                </h2>
                {/* <TransactionTable addresses={this.props.allAddresses} /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account,
    trans: state.trans,
    allAddresses: state.allAddresses
})

const mapDispatchToProps = dispatch => ({
    onClickSignOut: () => dispatch(submitLogout()),
    dispatch
})

AdminAllAddresses = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminAllAddresses))

export default AdminAllAddresses