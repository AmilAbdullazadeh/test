import s from './list.module.css';
import Item from "../Item/Item.jsx";
import React from "react";

function List(props) {

    function handleDiffLevel (level) {
        props.setDiffLevel(level);
    }
    return (
        <div className={s.box}>

            <div onClick={() => handleDiffLevel('Easy')}
                 className={s.item}
                 style={{backgroundColor: '#6065f1', color: 'white'}}
            >
                Easy
            </div>

            <div onClick={() => handleDiffLevel('Medium')}
                 className={s.item}
                 style={{backgroundColor: '#6065f1', color: 'white'}}
            >
                Medium
            </div>
            <div onClick={() => handleDiffLevel('Hard')}
                 className={s.item}
                 style={{backgroundColor: '#6065f1', color: 'white'}}
            >
                Hard
            </div>
            <div onClick={() => handleDiffLevel('Vary Hard')}
                 className={s.item}
                 style={{backgroundColor: '#6065f1', color: 'white'}}
            >
                Very Hard
            </div>

            {/*<Item level="Easy" />*/}
            {/*<Item level="Medium" />*/}
            {/*<Item level="Hard" />*/}
            {/*<Item level="Very Hard" />*/}

        </div>
    );
}

export default List;