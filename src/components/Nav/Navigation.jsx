import React from "react";
import {getMenu} from "../../../sanity/api";
import NavLink from "./NavLink.jsx";

const menu = await getMenu();

let Navigation = () => {

    let menuList = menu.map((item, index) => (
        item
    ));


    return (
        <nav className="menu">
            <ul className="menu__list">
                {menuList.map((item, index) => (
                    <NavLink key={index.toString()} title={item.title} slug={item.slug}/>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;
