import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

function Button (props) {
    return (
        <Link to="/" className="button">{props.action}</Link>
        )
}

export default Button;