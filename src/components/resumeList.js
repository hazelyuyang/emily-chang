import React from 'react'
import '../components/list.css'

export default props => (
    <ul className="List">
        <li>{props.year}
        <p>{props.drama}</p>
        <p className="jobTitle">{props.jobTitle}</p>
        </li>
    </ul>
)