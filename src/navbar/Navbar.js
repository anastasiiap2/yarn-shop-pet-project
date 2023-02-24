import logo from "../assets/images/knitting_main_icon.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import "./navbar.sass";

export default function Navbar() {
    const [isActive, setActive] = useState(false);

    const toggleClassName = () => {
        setActive(!isActive)
    }

    return <>
        <nav className="nav-menu">
            <div className="navbar-container">
                <a href="/">
                    <img src={logo} alt="Sorry, this picture is unavailable" width="512" height="512" id="logo-img"/>
                </a>
                <div className="dropdown">
                    <button className="dropdown-btn" onClick={toggleClassName}>
                        {/*<FontAwesomeIcon icon={faBars} size="lg" className="faBars"/>*/}Menu
                    </button>
                    <div className={isActive ? "active" : "hidden"} id="nav-list">
                        <a href="/" className="nav-links">
                            Patterns & Books
                        </a>
                        <a href="/" className="nav-links">
                            Shop
                        </a>
                        <a href="/" className="nav-links">
                            About us
                        </a>
                        <a href="/" className="nav-links">
                            Contacts
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </>
}