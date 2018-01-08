import React from "react";

export class AddressTable extends React.Component {

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Address</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.addresses.map((item, index) => {
                                return (
                                    <tr key={index + 1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.address}</td>
                                        <td>{item.value}</td>                                      
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