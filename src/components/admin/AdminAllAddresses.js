import React from "react";
import { connect } from "react-redux";
import { Redirect, Link, BrowserRouter, withRouter } from "react-router-dom";
import { AdminNavbar } from "../smaller/AdminNavbar";
import { AdminSidebar } from "../smaller/AdminSidebar";
import axios from "axios";
import { AddressTable } from "../smaller/addressTable";
import { Error } from "../smaller/warnings";
import { reduxForm, Field } from "redux-form";
import { InputText } from "../smaller/InputField";
import { getAllAddresses, submitLogout, } from "../../actions";

class AdminAllAddresses extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // myState.isLoggedIn = fakeAuth.isAuthenticated;
        // myState.wallet_id = fakeAuth.wallet_id;
        this.props.dispatch(getAllAddresses());
    }

    render() {
        const myState = this.props.account;
        return (
            <div>
                <h2 className="heading-bottom-top">All addressses&nbsp;
                 <i className="fa fa-address-card"></i>
                </h2>
                <AddressTable addresses={this.props.allAddresses.addressTable} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account,
    allAddresses: state.allAddresses
})

const mapDispatchToProps = dispatch => ({
    onClickSignOut: () => dispatch(submitLogout()),
    dispatch
})

AdminAllAddresses = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminAllAddresses))

export default AdminAllAddresses