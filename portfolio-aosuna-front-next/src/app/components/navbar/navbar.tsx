import style from "./navbar.module.css"
import Image from "next/image";
import logo from "../../../../public/logo.png"

function NavBar(){

    return <>
        <nav>
            <div className={style.logoContainer}>
                <Image src={logo} alt="logo" width={50} height={50}/>
                <h2>AleDev</h2>
            </div>
            <div className={style.menuHamburguer}>
                <ul>
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
                </ul>
            </div>
            <ul>

            </ul>
        </nav>
    </>
}

export default NavBar;