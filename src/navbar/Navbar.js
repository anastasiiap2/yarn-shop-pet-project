import logo from "../assets/images/knitting_main_icon.png";
import "./navbar.sass";
import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";


export default function Navbar() {
    // const [button, setButton] = useState(false);
    // const [click, setClick] = useState(false);
    //
    // const handleClick = () => setClick((!click))
    // const closeMobileMenu = () => setClick(false)
    // const showButton = () => {
    //     if (window.innerWidth <= 960) {
    //         setButton(false)
    //     }
    //     setButton(true)
    // }

    return <>
        <div className="navbar-container">
            <div id="logo" className="flex-item">
                <img src={logo} alt="Sorry, this picture is unavailable" width="512" height="512" id="logo-img"/>
            </div>
            <div className="flex-item search-bar">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    margin="normal"
                />
            </div>
            {/*<div className="menu-icon" onClick={handleClick}>*/}
            {/*    /!*<i className={click ? 'fas fa-times' : 'fas fa-bars'}/>*!/*/}
            {/*    /!*<FontAwesomeIcon icon="fa-thin fa-house" />*!/*/}
            {/*</div>*/}
            <nav className="nav-menu flex-item">
                <a href="/" className="nav-links"
                    // onClick={closeMobileMenu}
                >
                    <div className="nav-items">Patterns & Books
                    </div>
                </a>
                <a href="/" className="nav-links"
                    // onClick={closeMobileMenu}
                >
                    <div className="nav-items">Shop
                    </div>
                </a>
                <a href="/" className="nav-links"
                    // onClick={closeMobileMenu}
                >
                    <div className="nav-items">About us
                    </div>
                </a>
                <a href="/" className="nav-links"
                    // onClick={closeMobileMenu}
                >
                    <div className="nav-items">
                        Contacts
                    </div>
                </a>
            </nav>
        </div>
    </>
}