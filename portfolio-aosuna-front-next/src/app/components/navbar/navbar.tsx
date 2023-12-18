"use client"
import style from "./navbar.module.css"
import Image from "next/image";
import logo from "../../../../public/logo.png"
import SwitchTheme from "../switchTheme/switchTheme";
import { useSelector } from "react-redux";

function NavBar(){

    const dark = useSelector((state:any) => state.themeReducer.dark)
    return <div className={dark ? "dark-theme" : ""}>
        <nav className={style.nav}>
            <div className={style.logoContainer}>
                <Image className={style.logo} src={logo} alt="logo" width={50} height={50}/>
                <h2>AleDev</h2>
            </div>
            <div className={style.menuHamburguer}>
                <ul className={style.navItems}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About me</a>
                    </li>
                    <li>
                        <a href="#">Background</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    
            <SwitchTheme/>
                </ul>
                
            </div>
        </nav>
    </div>
}

export default NavBar;