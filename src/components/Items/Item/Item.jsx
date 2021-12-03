import React from "react";
import ItemClass from './Item.module.css';




const Item = (props) => {
    return (
        <div className={ItemClass.item}>
            <img src={props.image} className={ItemClass.sizedImg} />
            <div className={ItemClass.top_left}>
                <a href="" className={ItemClass.bordered}> {props.date}</a>
            </div>
            <div className={ItemClass.bot_left}>
                <a href=""> {props.name} </a>
            </div>
            <div className={ItemClass.top_right}>
                <a href=""> <img src="../images/vector.png"  /> </a>
            </div>
        </div>
    )
}

export default Item;