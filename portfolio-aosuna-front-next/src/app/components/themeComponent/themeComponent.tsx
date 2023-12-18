"use client";
import { useSelector } from "react-redux";
import NavBar from "../navbar/navbar";
import AboutMe from "@/app/aboutme/page";
import Background from "@/app/background/page";
import MyProjects from "@/app/myprojects/page";
import MySkills from "@/app/myskills/page";
import Contact from "@/app/contact/page";

const ThemeComponent = () => {

    const dark = useSelector((state:any) => state.themeReducer.dark)
    return <div className={dark ? "dark-theme" : ""} >
     <NavBar/>
      <AboutMe/>
      <Background/>
      <MyProjects/>
      <MySkills/>
      <Contact/>
    </div>
}


export default ThemeComponent;