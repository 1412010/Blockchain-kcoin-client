import React from 'react';

export const InputText = props => {
    const { input, meta, ...rest } = props;
    return (
        <input
            className="form-control"
            { ...input } { ...rest }
        />
    )
}

export const InputCheckbox = props => {
    const { input, meta, ...rest } = props;
    return (
        <input
            className="form-check-input"
            { ...input } { ...rest }
        />
    )
}