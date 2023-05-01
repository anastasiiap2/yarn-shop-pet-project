import facebook from "../../assets/images/facebook-internet-media-svgrepo-com.svg";
import instagram from "../../assets/images/instagram-internet-media-svgrepo-com.svg";
import twitter from "../../assets/images/internet-media-social-4-svgrepo-com.svg";
import youtube from "../../assets/images/internet-media-social-11-svgrepo-com.svg";
import "./footer.sass";

export default function Footer(){

    return <>
        <div className="layout">
            <div id="info">
                Our contacts:
                +48 123 123 123
                +48 321 321 321
                Email:
                info.yarnshop@gmail.com
            </div>
            <div id="links">
                <a href="#"><img src={facebook} alt="facebook" width="50" height="50"/></a>
                <a href="#"><img src={twitter} alt="twitter" width="50" height="50"/></a>
                <a href="#"><img src={youtube} alt="youtube" width="50" height="50"/></a>
                <a href="#"><img src={instagram} alt="instagram" width="50" height="50"/></a>
            </div>
            <div>

            </div>
        </div>
    </>
}