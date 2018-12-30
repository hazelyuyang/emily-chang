import React from 'react'
import '../components/works.css'

export default props => (
    <div className="card">
        <img src={props.image} alt={props.text} />
    </div>
)