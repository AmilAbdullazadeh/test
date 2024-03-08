import "../../global.css";
import s from './diffpicker.module.css';
import DisplayBox from "../../components/DisplayBox/DisplayBox.jsx";
import List from "../../components/List/List.jsx";
import {useState} from "react";

export const DiffPicker = () => {
    const [diffLevel, setDiffLevel] = useState("Hard");

    return (
        <div className="container">
            <List diffLevel={diffLevel} setDiffLevel={setDiffLevel} />
            <DisplayBox diffLevel={diffLevel} />
        </div>
    );
}

