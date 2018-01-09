import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { getTransDetail } from "../../actions/index";

class TransactionDetail extends React.Component {
    componentWillMount() {
        const hash = this.props.match.params.hash
        this.props.getTransactionDetail(hash)
    }

    render() {
        const { transDetail } = this.props.trans
        console.log(transDetail)
        if (!transDetail.hash) {
            console.log('null');
            return (<div></div>)
        }
        return (
            <div>
                <h3 className="heading-bottom-top">
                    Hash
                </h3>
                <p>{ transDetail.hash }</p>
                <br/>
                <h3 className="heading-bottom-top">
                    Inputs
                </h3>
                {
                    transDetail.inputs.map((item, index) => {
                        return (<p>#{index + 1}:   {item.referencedOutputHash}<p>Index: {item.referencedOutputIndex}</p></p>)
                    })
                }
                <br/>
                <h3 className="heading-bottom-top">
                    Outputs
                </h3>
                {
                    transDetail.outputs.map((item, index) => {
                        return (<p>#{index + 1}: <strong>{item.value}</strong> to {item.lockScript.split(' ')[1]}</p>)
                    })
                }
            </div>
        )
    }

}

const mapStateToProps = state => ({
    account: state.account,
    trans: state.trans
})

const mapDispatchToProps = dispatch => ({
    getTransactionDetail: hash => dispatch(getTransDetail(hash)),
    dispatch
})

TransactionDetail = withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionDetail))

export default TransactionDetail