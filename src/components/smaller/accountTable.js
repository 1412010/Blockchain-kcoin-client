import React from "react";

export class AccountTable extends React.Component {

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Available balance</th>
                            <th scope="col">Real balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.accounts.map((item, index) => {
                                return (
                                    <tr key={index + 1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item._email}</td>
                                        <td>{item._availableBalance}</td>  
                                        <td>{item._realBalance}</td>                                    
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}