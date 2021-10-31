import React from "react";
import stayle from "./frend.module.css"

const Frends = (props) => {
    return (
        <div className={stayle.item}>
            <img src='' alt=''/>
            {props.name}
        </div>
    );
}

export default Frends