import React from 'react'
import { Link } from 'react-router-dom'
// import propTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="/">TextUtils</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">{props.title} <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li> */}
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
            <div class={`custom-control custom-switch text-${props.toggleTextColor}`}>
                <input type="checkbox" class="custom-control-input" id="customSwitch1" onClick={props.toggleInput} />
                <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
            </div>
        </nav>
    )
}
