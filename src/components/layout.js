import React from 'react'
import { Link } from 'gatsby';
import '../components/layout.css'

export default ({children}) => (
    <div>
        <div className="header">
            <div className="home">
                <Link to="/">Emily Chang</Link>
            </div>
            <div className="header-group">
                <Link to="">簡介</Link>
                <Link to="">作品</Link>
                <Link to="">聯絡方式</Link>
            </div>
        </div>
        {children}
    </div>    
    )