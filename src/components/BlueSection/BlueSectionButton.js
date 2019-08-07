import React from "react";

const BlueSectionButton = (props) => {
    return (
        <a href={props.buttonLink} target="_blank">
            <button>
                <img className="img-responsive" href={props.buttonLink} src={"./images/buttons/"+ props.buttonImg} alt={props.description} title={props.description}/>
            </button>
        </a>
    );
}; //BlueSection()

export default BlueSectionButton;