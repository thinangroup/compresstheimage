import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Footer() {
    return (
        <div classname="foot">
            <div classname="copy" >
                <p style={{ textAlign: 'center', color: "blue" }} >Contact us</p>
                <p style={{ textAlign: 'center', }} ><a href="https://www.facebook.com/Thinan-Groups-100486115645862" ><FacebookIcon style={{ color: "blue", height:'45px', width:'45px' }} /></a>  <a href="https://www.instagram.com/thinan_groups/"><InstagramIcon style={{ color: "red", height:'45px', width:'45px' }} /></a><a href="mailto:thinangroups@gmail.com" ><MailOutlineIcon style={{ color: "darkblue", height:'45px', width:'45px' }} /></a> </p>
            </div>

        </div >
    )
}

export default Footer