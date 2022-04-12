import React from 'react'

type FieldProps = {
    label: string
    children: any
}

const Field = ({ label, children }: FieldProps) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">{children}</div>
        </div>
    )
}

export default Field
