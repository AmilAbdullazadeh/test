import React from 'react';
import s from "../Item/item.module.css";

function Item(props) {
    return (
        <div className={s.item} style={{backgroundColor: '#BEDCFE'}}>
            {props.level}
        </div>
    );
}

export default Item;