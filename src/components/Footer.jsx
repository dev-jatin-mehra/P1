import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        {/* <div className='socialMedia'>
            <InstagramIcon/>
            <GithubIcon/>
            <Twitter/>
        </div> */}
        <p> &copy; 2024 JatinMehra </p>
    </div>
  )
}

export default Footer