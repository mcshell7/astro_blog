import React from "react";

const NavLink = (props) =>{
    let link = `/${props.slug}/`;
    return(
        <li className="menu__item">
            <a className="menu__item-link" href={link} target='_self'>{props.title}</a>
        </li>
    )
}

export default NavLink;