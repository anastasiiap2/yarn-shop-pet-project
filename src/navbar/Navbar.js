import logo from "../assets/images/2023_03_01_0ry_Kleki.png";
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
        <nav className="navbar-container flex-container">
            <div className="flex-item logo-div">
                <img src={logo} alt="Sorry, this picture is unavailable" width="512" height="512" id="logo-img"/>
                <svg width="100" height="100">

                </svg>
            </div>
            <button className="dropdown-btn" onClick={toggleClassName}>
                Menu
            </button>
            <div className={isActive ? "visible flex-item nav-list" : "flex-item nav-list"}>
                <a href="/" className={isActive ? "visible nav-link" : "nav-link"}>
                    Yarns
                </a>
                <a href="/" className={isActive ? "visible nav-link" : "nav-link"}>
                    Crochet hooks
                </a>
                <a href="/" className={isActive ? "visible nav-link" : "nav-link"}>
                    Auxiliary tools
                </a>
                <a href="/" className={isActive ? "visible nav-link" : "nav-link"}>
                    Knitting needles
                </a>
            </div>
        </nav>
    </>
}