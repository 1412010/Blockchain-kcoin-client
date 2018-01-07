import React from "react";

export class TransactionTable extends React.Component {

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Time</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Values</th>
                            <th scope="col">State</th>
                            <th scope="col">Hash</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.trans.map((item, index) => {
                                var time = new Date(item._dateInit);
                                var strTime = time.toLocaleDateString() + " " + time.toLocaleTimeString();
                                return (
                                    <tr key={index + 1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{strTime}</td>
                                        <td>{item._inputAddress == this.props.address ? 'You' : item._inputAddress}</td>
                                        <td>{item._outputAddress == this.props.address ? 'You' : item._outputAddress}</td>
                                        <td>{item._value}</td>
                                        <td>{item._state}</td>
                                        <td>{item._hash}</td>                                        
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