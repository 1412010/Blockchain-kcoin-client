import React from "react";
export class Sidebar extends React.Component {

    render() {
        return (
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" onClick={this.props.onClickNotSysTrans}><i className="fa fa-home fa-lg" ></i>&nbsp;Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-toggle="modal" data-target="#accountModal"><i className="fa fa-user fa-lg" ></i>&nbsp;My account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-toggle="modal" data-target="#sendModal"><i className="fa fa-arrow-circle-up fa-lg"></i>&nbsp;Send coin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-toggle="modal" data-target="#verifyModal"><i className="fa fa-check-circle fa-lg"></i>&nbsp;Verify Transaction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.props.onClickSysTrans}><i className="fa fa-exchange fa-lg"></i>&nbsp;Show all transaction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.props.onClickSignOut}><i className="fa fa-power-off fa-lg"></i>&nbsp;Sign out</a>
                    </li>
                </ul>
            </nav>
        );
    }
}