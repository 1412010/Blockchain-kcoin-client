import React from "react";

export class AccountTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            accTable: [],
            limit: 5,
            offset: 1,
            pageSum: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        const { limit } = this.state
        this.setState({
            accTable: nextProps.accounts,
            pageSum: limit == 0 ? 0 : Math.ceil(nextProps.accounts.length / limit)
        })
    }

    onChange_Select = (e) => {
        this.setState({
            limit: e.target.value,
            offset: 1,
            pageSum: e.target.value == 0 ? 1 : Math.ceil(this.state.accTable.length / e.target.value)
        })
    }

    onClick_NextPage = (e) => {
        const { offset, pageSum } = this.state
        if (offset + 1 <= pageSum)
            this.setState({
                offset: offset + 1,
            })
    }
    onClick_PrevPage = (e) => {
        const { offset, pageSum } = this.state
        if (offset - 1 > 0)
            this.setState({
                offset: offset - 1,
            })
    }
    render() {
        return (
            <div>
                <div className="row heading-bottom-top">
                    <div className="col-md-6">
                        <h2>All accounts&nbsp;
                        <i className="fa fa-user"></i>
                        </h2>
                    </div>
                    <div className="col-md-6" style={{ display: "inline-block" }}>
                        <div className="form-inline">
                            <label htmlFor="select">Show &nbsp;</label>
                            <select id="select" className="form-control" value={this.state.limit} onChange={this.onChange_Select}>
                                <option value={0}>All</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>
                            <div className="" style={{ paddingLeft: "10%" }}>
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a class="page-link" href="#" aria-label="Previous" onClick={this.onClick_PrevPage}>
                                                <span aria-hidden="true">&laquo;</span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item disabled" ><a className="page-link" href="#">{this.state.offset}</a></li>
                                        <li className="page-item">
                                            <a class="page-link" href="#" aria-label="Next" onClick={this.onClick_NextPage}>
                                                <span aria-hidden="true">&raquo;</span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Available balance</th>
                                <th scope="col">Total balance</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.accounts.map((item, index) => {
                                    const { offset, limit } = this.state
                                    if (limit != 0 && ((index < (offset - 1) * limit) || (index >= offset * limit)))
                                        return;
                                    var time = new Date(item._dateInit);
                                    var strTime = time.toLocaleDateString() + " " + time.toLocaleTimeString();

                                    return (
                                        <tr key={index + 1}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item._email}</td>
                                            <td>{item._availableBalance}</td>
                                            <td>{item._realBalance}</td>
                                            <td>{item._address}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}