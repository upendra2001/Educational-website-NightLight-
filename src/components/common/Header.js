import React, { useState } from 'react'
import '../../css/header/header.css'
export default function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="header-main">
            <nav className="navbar navbar-light fixed-top navbar-expand-md navbar-no-bg">
                <a className="navbar-brand" href="index.html"> U V </a>
                {/* <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
                <button className={`navbar-toggler ${!toggle ? "collapsed" : ""}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onClick={() => setToggle(!toggle)}></span>
                </button>
                {/* <div className="collapse navbar-collapse show" id="navbarNav"> */}
                <div className={`collapse navbar-collapse ${toggle ? "nav-top-ul-li-text-align show" : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto nav-top-ul">
                        <li className="nav-item">
                            <a className="nav-link scroll-link" href="#top-content">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll-link" href="#section-1">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll-link" href="#section-2">Login/SignUp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll-link" href="#section-3">Search</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
