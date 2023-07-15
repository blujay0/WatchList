import "./Footer.css"
import { Link } from "react-router-dom" // Link component replaces the anchor tags
import { Twitter, Facebook, Instagram, MailOutline } from '@mui/icons-material'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Link to="/" className="site-title">
        WatchList
      </Link>
      <Link to="/about">
        About
      </Link>
      
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

      <a href='https://twitter.com' target="_blank" rel='noreferrer'>
        <Twitter sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
      </a>
      <a href='https://facebook.com' target="_blank" rel='noreferrer'>
        <Facebook sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
      </a>
      <a href='https://instagram.com' target="_blank" rel='noreferrer'>
        <Instagram sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
      </a>
      <a href='https://gmail.com/' target="_blank" rel='noreferrer'>
        <MailOutline sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
      </a>
      <p>&copy; 2023-{currentYear} WatchList, Inc.</p> 
      {/* <a href='#root'>
        <button className="back-button" style={{marginLeft: '10px'}}> Back to Top</button>
      </a>       */}
    </footer>
  )
}

export default Footer