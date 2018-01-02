import React from "react";

export function Error(props) {
    var style = {
        display: 'none'
    };
    if (!!props.errMsg) {
        style["display"] = "block";
    }
    return (
        <div style={style} id="login-alert" className="alert alert-danger col-sm-12">
            {props.errMsg}
        </div>
    );
}

export function Success(props) {
    var style = {
        display: 'none'
    };
    if (!!props.errMsg) {
        style["display"] = "block";
    }
    return (
        <div style={style} id="login-alert" className="alert alert-success col-sm-12">
            {props.errMsg}
        </div>
    );
}