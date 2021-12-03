import React from "react";
import Item from "./Item/Item";
import ItemsClasses from './Items.module.css';




const Items = (props) => {


    let event = props.events.map(e => <Item name={e.name} date={(e.date).slice(0, 2)} image={e.image} />);

    

    return (
        <div className={ItemsClasses.items}>
            {event}
        </div>

    )
}

export default Items;