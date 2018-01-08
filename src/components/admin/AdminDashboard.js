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
import { getStatistics, submitLogout, } from "../../actions";

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // myState.isLoggedIn = fakeAuth.isAuthenticated;
        // myState.wallet_id = fakeAuth.wallet_id;
        this.props.dispatch(getStatistics());
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
        const myStat = this.props.statistics;

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
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2 className="heading-bottom-top">Total available balance&nbsp;
                                                <i className="fa fa-usd"></i></h2>
                                                <div className="wrapperBalance"  style={{ paddingTop: "10%"}}>
                                                    <h1 style={{ fontSize: "400%", fontWeight: "300" }}>{myStat.sumAvailableBalance} kcoins</h1>
                                                </div>
                                            </div>
                                            <div className="col-md-6" >
                                                <h2 className="heading-bottom-top">Total real balance&nbsp;
                                                <i className="fa fa-usd"></i></h2>
                                                <div className="wrapperBalance" style={{ paddingTop: "10%"}}>
                                                    <h1 style={{ fontSize: "400%", fontWeight: "300" }}>{myStat.sumRealBalance} kcoins</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <h2 className="heading-bottom-top">No. of users&nbsp;
                                            {myStat.noOfUsers}
                                        </h2>
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
    statistics: state.statistics
})

const mapDispatchToProps = dispatch => ({
    onClickSignOut: () => dispatch(submitLogout()),
    dispatch
})

AdminDashboard = connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)

export default AdminDashboard