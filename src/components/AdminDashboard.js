import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Navbar } from "./smaller/navbar";
import { AdminSidebar } from "./smaller/AdminSidebar";
import axios from "axios";
import { TransactionTable } from "./smaller/transTable";
import { Error } from "./smaller/warnings";
import { reduxForm, Field } from "redux-form";
import { InputText } from "./smaller/InputField";
import { updateMyWallet } from "../actions";

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdminLoggedIn: true,
            noOfUsers: 0,
            realBalance: 0,
            availableBalance: 0,
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
        if (!myState.isAdminLoggedIn) {
            return (
                <Redirect to="/login" />
            );
        }
        return (
            <div>
                <Navbar wallet_id={myState.wallet_id} email={myState.email} onClickSignOut={null}/>
                <div className="container-fluid">
                    <div className="row" >
                        <AdminSidebar onClickSysTrans={null} onClickNotSysTrans={null} onClickSignOut={null}/>
                        <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3 px-4" style={{ marginTop: "5%" }}>
                            {(() => {
                                if (!myState.isInSysTrans) {
                                    return (
                                        <div>
                                            <h2 className="heading-bottom-top">Your balance&nbsp;
                                            <i className="fa fa-usd"></i>
                                            </h2>
                                            <div className="wrapperBalance">
                                                <h1 style={{ fontSize: "500%", fontWeight: "300" }}>{myState.availableBalance} kcoins</h1>
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

                {/* <!-- Statistics Modal --> */}
                <div className="modal fade" id="statisticsModal" tabIndex="-1" role="dialog" aria-labelledby="sendModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Statistics</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div style={{marginLeft: 50}}>
                                    <div style={{ marginBottom: 25 }}>
                                        No. of users: <span style={{fontWeight: 'bold', marginLeft: 10}}>{myState.noOfUsers}</span>
                                    </div>
                                    <div style={{ marginBottom: 25 }}>
                                        Total available balance: <span style={{fontWeight: 'bold', marginLeft: 30}}>{myState.availableBalance}</span>  kcoins
                                    </div>
                                    <div style={{ marginBottom: 25 }}>
                                        Total real balance: <span style={{fontWeight: 'bold', marginLeft: 50}}>{myState.realBalance}</span> kcoins
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
    state
})

const mapDispatchToProps = dispatch => ({
    
})

AdminDashboard = connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)

export default AdminDashboard