import React from "react";

export class TransactionTable extends React.Component {

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">No. of coins</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.trans.map((item, index) => {
                                var time = new Date(item.time);
                                var strTime = time.toLocaleDateString() + " " + time.toLocaleTimeString();
                                return (
                                    <tr key={index + 1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.from == this.props.myid ? 'You' : item.from}</td>
                                        <td>{item.to == this.props.myid ? 'You' : item.to}</td>
                                        <td>{item.coin}</td>
                                        <td>{strTime}</td>
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