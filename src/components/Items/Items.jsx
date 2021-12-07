import React from "react";
import Item from "./Item/Item";
import ItemsClasses from './Items.module.css';




const Items = (props) => {
    return (
        <div className={ItemsClasses.items}>
            {props.events}
        </div>

    )
}

export default Items;