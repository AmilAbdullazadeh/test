import React from "react";
import { LEVELS } from "../../helpers/constants";
import Item from "../Item/Item";
import s from './list.module.css';

function List(props) {

    function handleDiffLevel (level) {
        props.setDiffLevel(level);
    }
    
    return (
        <div className={s.box}>
            {
                LEVELS.map((level, index) => {
                    return (
                      <Item
                        key={index}
                        level={level}
                        diffLevel={props.diffLevel}
                        handleDiffLevel={handleDiffLevel}
                      />
                    );
                })
            }
      </div>
    );
}

export default List;