import "./Footer.css"
import { Link } from "react-router-dom" // Link component replaces the anchor tags
import { Twitter, Facebook, Instagram, MailOutline } from '@mui/icons-material'

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="site-title">
        WatchList
      </Link>
      <Link to="/about">
        About
      </Link>
      <a href='https://twitter.com' target="_blank" rel='noreferrer'>
        <Twitter className='socials-icon' sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
      </a>
      <a href='https://facebook.com' target="_blank" rel='noreferrer'>
        <Facebook className='socials-icon' sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
      </a>
      <a href='https://instagram.com' target="_blank" rel='noreferrer'>
        <Instagram className='socials-icon' sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
      </a>
      <a href='https://gmail.com/' target="_blank" rel='noreferrer'>
        <MailOutline className='socials-icon' sx={{mr: 2, fontSize: 40, color: '#2196f3'}} />
      </a>
      <p>Guitar Trader, Inc. &#8482;</p> 
      {/* <a href='#root'>
        <button className="back-button" style={{marginLeft: '10px'}}> Back to Top</button>
      </a>       */}
    </footer>
  )
}

export default Footer