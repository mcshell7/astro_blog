import React from "react";

const NavLink = (props) =>{
    return(
        <li className="menu__item">
            <a className="menu__item-link" href={props.slug} target='_self'>{props.title}</a>
        </li>
    )
}

export default NavLink;