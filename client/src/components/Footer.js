import "./Footer.css"
import { Link } from "react-router-dom" // Link component replaces the anchor tags

import { IconButton, BottomNavigation, BottomNavigationAction, AppBar, Box, Toolbar, Typography, InputBase, styled, alpha } from '@mui/material'
import { Chat, Twitter, Facebook, Instagram, MailOutline, Menu, Search } from '@mui/icons-material'

const Footer = ({ customer }) => {
  const currentYear = new Date().getFullYear();
  const iconStyle = { marginRight: 2, fontSize: 40, color: 'white' };

  return (
    <footer className="footer">

      {customer && <IconButton component={Link} to={{ pathname: '/chat' }} rel='noopener noreferrer'>
        <Chat sx={iconStyle} />
      </ IconButton>}
      
      {/* target="_blank" is a special keyword that will open links in a 
      new tab every time */}

      {/* target="blank" will open the first-clicked link in a new tab, but any future links 
      that share target="blank" will open in that same newly-opened tab. */}

      {/* Noreferrer (rel=“noreferrer”) is a keyword in the “rel” HTML 
      link attribute that instructs the browser not to send any referrer 
      information to the target resource when the user clicks the link on 
      a page. It also instructs the browser to behave as if the “noopener” 
      is specified in the “rel” attribute.
      In simple terms, this means that when someone clicks on the link 
      with the “noreferrer,” the server of the target resource won’t 
      know where the visitor came from. And in Google Analytics, this 
      visit will be shown as Direct Traffic, not Referral. */}

      {/* Update as of 2021: All current versions of major browsers now 
      automatically use the behavior of rel="noopener" for any target="_blank" 
      link, nullifying this issue. See more at chromestatus.com.*/}

      {/* <Link to='https://twitter.com' target="_blank" rel='noopener noreferrer'>
        <Twitter sx={iconStyle} />
      </Link> */}

      <IconButton component={Link} to={{ pathname: 'https://twitter.com' }} target="_blank" rel='noopener noreferrer'>
        <Twitter sx={iconStyle} />
      </IconButton>

      <IconButton component={Link} to={{ pathname: 'https://facebook.com'}} target="_blank" rel='noopener noreferrer'>
        <Facebook sx={iconStyle} />
      </IconButton>

      <IconButton component={Link} to={{ pathname: 'https://instagram.com'}} target="_blank" rel='noopener noreferrer'>
        <Instagram sx={iconStyle} />
      </IconButton>

      <IconButton component={Link} to={{ pathname: '/contact-us' }} target="_blank" rel='noopener noreferrer'>
        <MailOutline sx={iconStyle} />
      </IconButton>

      {/* <p style={{ fontSize: '20px' }}>
        <Link to="/about" rel='noopener noreferrer'>
          About
        </Link>
      </p> */}


      <div style={{ fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>&copy; 2023-{currentYear} WatchList, Inc.</div> 
      {/* <a href='#root'>
        <button className="back-button" style={{marginLeft: '10px'}}> Back to Top</button>
      </a>       */}

    </footer>
  )
}

export default Footer




