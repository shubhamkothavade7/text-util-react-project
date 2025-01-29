import React from 'react'

export default function Alert(props) {
    return (

        props.alert && <div class={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.status}</strong> {props.alert.message}
        </div>
    )
}
