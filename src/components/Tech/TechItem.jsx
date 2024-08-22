import React from "react";


let TechItem = (props) => {
    return (
        <div className="tech__item">
            <img src={props.image} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    )
}

export default TechItem;