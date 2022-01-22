import React, { Component } from 'react'
import {FaTools} from "react-icons/fa"

export default class Header extends Component {

    toggleNavBar = () => {
        const navLinkList = document.querySelector('.UlNavList');
        navLinkList.classList.toggle('active');
    }
    
    render() {
        return (
            <div>
                <nav>
                   <div className="brandName"><FaTools className='logo'/>Resume Builder</div>

                   <div className='toggleButton'onClick={this.toggleNavBar}>
<span className='bar'></span>
<span className='bar'></span>
<span className='bar'></span>
                   </div>
                   
                   <ul className="UlNavList">
                       <li className="navbarLink">Service</li>
                       <li className="navbarLink">About</li>
                       <li className="navbarLink">contact</li>

                   </ul>
                </nav>
            </div>
        )
    }
}
