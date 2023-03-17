import logo from "../assets/images/2023_03_01_0ry_Kleki.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link, BrowserRouter} from "react-router-dom";
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
                <Link to="/" className={isActive ? "visible nav-link" : "nav-link"}>
                    Yarns
                </Link>
                <Link to="/crochet-hooks" className={isActive ? "visible nav-link" : "nav-link"}>
                    Crochet hooks
                </Link>
                <Link to="/auxiliary-tools" className={isActive ? "visible nav-link" : "nav-link"}>
                    Auxiliary tools
                </Link>
                <Link to="/knitting-needles" className={isActive ? "visible nav-link" : "nav-link"}>
                    Knitting needles
                </Link>
            </div>
        </nav>
    </>
}