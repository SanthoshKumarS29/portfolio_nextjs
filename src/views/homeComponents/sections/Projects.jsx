"use client"

import { useEffect, useState } from "react"
import ProjectMdScreen from "../uiElements/ProjectMdScreen";
import ProjectLgScreen from "../uiElements/ProjectLgScreen";

export default function Projects(){
    const [tab, setTab] = useState()
    useEffect(() => {
        const checkScreen = () => {
            setTab(window.innerWidth <= 991)
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen)
    }, []);

    return(
        <>
            {tab ? <ProjectMdScreen /> : <ProjectLgScreen />}
        </>
    )
}