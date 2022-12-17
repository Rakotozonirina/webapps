import React, { Children } from "react";
import Photo from "../photos/paysage.png";

const Apropos = (props) => {
    return (
        <div className="info">
            <img src={Photo} alt="" />
            <h4>{props.titre}</h4>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis.
            </p>
        </div>
    )
}

export default Apropos;