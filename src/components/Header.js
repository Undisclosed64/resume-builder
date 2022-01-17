import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                   <div className="brandName">Resume Builder</div>
                   <ul className="navLinksList">
                       <li className="navbarLink">Home</li>
                       <li className="navbarLink">About</li>
                       <li className="navbarLink">contact</li>

                   </ul>
                </nav>
            </div>
        )
    }
}
