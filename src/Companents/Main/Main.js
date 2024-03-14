import React from "react";
// import style from './Main.module.css'
import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Favorite from "./Favorite/Favorite";
import Cofee from "./Cofee/Cofee";
import Contacts from "./Contacts/Contacts";
import LibraryCard from "./LibraryCard/LibraryCard";

const Main =()=>{


    return(
        <main>
            <Welcome/>
            <About/>
            <Favorite/>
            <Cofee/>
            <Contacts/>
            <LibraryCard/>
        </main>
    )
}

export default Main;