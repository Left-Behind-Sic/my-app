import React from "react";
import Item from "./Item/Item";
import ItemsClasses from './Items.module.css';




const Items = (props) => {

    // let eventF = props.events.filter(e => (e.date).substr(3, 2)==props.dateS);
 
    
    // eventF = eventF.filter(e => e.city=="Amsterdam");

    // let event = props.events.map(e => <Item name={e.name} date={(e.date).slice(0, 2)} image={e.image} />);

    

    return (
        <div className={ItemsClasses.items}>
            {props.events}
        </div>

    )
}

export default Items;