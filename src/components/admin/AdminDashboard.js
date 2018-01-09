import React from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getStatistics, submitLogout } from "../../actions";

class AdminDashboard extends React.Component {
    
    componentWillMount() {
        // myState.isLoggedIn = fakeAuth.isAuthenticated;
        // myState.wallet_id = fakeAuth.wallet_id;
        this.props.dispatch(getStatistics());
    }

    render() {
        console.log('admin main');
        // console.log(this.props);
        // const myState = this.props.account;
        const myStat = this.props.statistics;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="heading-bottom-top">Total available balance&nbsp;
                            <i className="fa fa-usd"></i></h2>
                        <div className="wrapperBalance" style={{ paddingTop: "10%" }}>
                            <h1 style={{ fontSize: "400%", fontWeight: "300" }}>{myStat.sumAvailableBalance} kcoins</h1>
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <h2 className="heading-bottom-top">Total balance&nbsp;
                            <i className="fa fa-usd"></i></h2>
                        <div className="wrapperBalance" style={{ paddingTop: "10%" }}>
                            <h1 style={{ fontSize: "400%", fontWeight: "300" }}>{myStat.sumRealBalance} kcoins</h1>
                        </div>
                    </div>
                </div>

                <h2 className="heading-bottom-top">No. of users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ fontSize: "200%", fontWeight: "300" }}>{myStat.numberOfAcc}</span>
                </h2>
            </div>
        )
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

AdminDashboard = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminDashboard))

export default AdminDashboard