import React from "react";
import { useState,useEffect } from "react";
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    const [logo,setLogo] = useState();
    const [wp,setWp]=useState();
    useEffect(() => {
        if(document.body.className==="light-theme")
        {
            setLogo(require("../assets/light_footer.png"));
            setWp(require("../assets/logo_wordpress_light.png"));
        }
        else
        {
            setLogo(require("../assets/dark_footer.png"));
            setWp(require("../assets/logo_wordpress_dark.png"));
        }
    
      },[])

    const mutationObserve = new MutationObserver(entries =>{
        if(document.body.className==="light-theme")
        {
            setLogo(require("../assets/light_footer.png"));
            setWp(require("../assets/logo_wordpress_light.png"));
        }
        else
        {
            setLogo(require("../assets/dark_footer.png"));
            setWp(require("../assets/logo_wordpress_dark.png"));
        }
    })
    mutationObserve.observe(document.body,{attributes:true});
    return ( 
        <div className="footer">
            <img src = {logo} alt ="not_found"></img>
            <div className="icons">
                <TwitterIcon id = "twitter" />
                <FacebookIcon id = "facebook"/>
                <InstagramIcon id = "insta"/>
                <img src={wp} alt='notfound'></img>
            </div>
            <div>
                <p>Developed by Sahil, Ketan and Aditya</p>
                <p>Designed by Adi</p>
                <p>Conference Hall, IIT Guwahati, North Guwahati,</p>
                <p>Guwahati, Assam 781039</p>
            </div>
        </div>
     );
}
 
export default Footer;