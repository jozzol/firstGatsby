import * as React from 'react';
import { Link } from 'gatsby';
import { container, Cheading, navlinks, navlinkitem, navlinktext } from './layout.module.css';

const Layout = ({title, heading, children}) => {
    return (
        <div className={container}>
            <title>{title}</title>
            <h1 className={Cheading}>{heading}</h1>
            <nav className={navlinks}>
                <li className={navlinkitem}><Link to='/' className={navlinktext}>Index</Link></li>
                <li className={navlinkitem}><Link to='/about' className={navlinktext}>About</Link></li>
                <li className={navlinkitem}><Link to='/contact' className={navlinktext}>Contact</Link></li>
            </nav>
            {children}
        </div>
    )
}

export default Layout;