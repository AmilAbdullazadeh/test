import { useState } from "react";
import DisplayBox from "../../components/DisplayBox/DisplayBox.jsx";
import List from "../../components/List/List.jsx";
import "../../global.css";

export const DiffPicker = () => {
    const [diffLevel, setDiffLevel] = useState("Hard");

    return (
        <div className="container">
            <List diffLevel={diffLevel} setDiffLevel={setDiffLevel} />
            <DisplayBox diffLevel={diffLevel} />
        </div>
    );
}

