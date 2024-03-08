import React from 'react';
import style from "./section.module.css";

export const Section = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <p className={style.info}>
                {props.description}
            </p>
        </>
    );
}