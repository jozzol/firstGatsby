import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { container, Cheading, navlinks, navlinkitem, navlinktext, siteTitle, } from './layout.module.css';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';

const Layout = ({title, heading, children}) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div className={container}>
            <title>{data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav className={navlinks}>
              <Button variant="outlined">
                <li className={navlinkitem}><Link to='/' className={navlinktext}>Index</Link></li>
                <li className={navlinkitem}><Link to='/about' className={navlinktext}>About</Link></li>
                <li className={navlinkitem}><Link to='/contact' className={navlinktext}>Contact</Link></li>
                <li className={navlinkitem}><Link to='/blog' className={navlinktext}>Blog</Link></li>
              </Button>
            </nav>
            <h1 className={Cheading}>{heading}</h1>
            {children}
        </div>
    )
}

export default Layout;