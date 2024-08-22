import React from "react";
import TechItem from "./TechItem.jsx";

const Tech = (props) => {


    let list = props.tech.map((item, index) => (
        item
    ));

    return (
        <section className="tech">
            <div className="container">
                <h2>{props.title}</h2>
                <div className="tech__list">
                    {list.map((item, index) => (
                        <TechItem key={index.toString()} title={item.title} image={item.image} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tech;