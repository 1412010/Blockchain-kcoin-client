


import React from "react";
import { connect } from "react-redux";
import { Redirect, Link, BrowserRouter, withRouter } from "react-router-dom";
import { AdminNavbar } from "../smaller/AdminNavbar";
import { AdminSidebar } from "../smaller/AdminSidebar";
import AdminAllAccounts from "./AdminAllAccounts";
import AdminAllAddresses from "./AdminAllAddresses";
import AdminAllTransactions from "./AdminAllTransactions";
import AdminDashboard from "./AdminDashboard";
import axios from "axios";
import { TransactionTable } from "../smaller/transTable";
import { Error } from "../smaller/warnings";
import { reduxForm, Field } from "redux-form";
import { InputText } from "../smaller/InputField";
import { getStatistics, submitLogout, } from "../../actions";
import { Switch, Route } from "react-router";

class AdminMain extends React.Component {
    constructor(props) {
        super(props);
    }



    componentDidMount() {
        //this.props.dispatch(updateMyWallet());
    }

    render() {
        console.log(this.props);
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

        return (
            <div>
                <AdminNavbar address={myState.address} email={myState.email} onClickSignOut={this.props.onClickSignOut}/>
                <div className="container-fluid">
                    <div className="row" >
                        <AdminSidebar address={myState.address} email={myState.email} onClickSignOut={this.props.onClickSignOut} />
                        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3 px-4" style={{ marginTop: "5%" }}>
                            <Switch>
                                <Route exact path="/admin/allAccounts" component={AdminAllAccounts} />
                                <Route exact path="/admin/allAddresses" component={AdminAllAddresses} />
                                <Route exact path="/admin/allTransactions" component={AdminAllTransactions} />
                                <Route path="/admin/dashboard" component={AdminDashboard} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account,
    statistics: state.statistics
})

const mapDispatchToProps = dispatch => ({
    onClickSignOut: () => dispatch(submitLogout()),
    dispatch
})

AdminMain = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminMain))

export default AdminMain