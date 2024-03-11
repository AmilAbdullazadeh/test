import { useEffect, useState } from 'react';
import s from './displaybox.module.css';

function DisplayBox(props) {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    // Lifecycle methods
    // componentDidMount ( Mounting ) page is loaded
    // componentDidUpdate ( Updating ) page is updated
    // componentWillMount ( Unmounitngt ) page is closed

    // componentDidMount ( Mounting, Subscribe ) page is loaded
    useEffect(() => {

        console.log("DisplayBox component did mount");

        // componentWillUnmount ( Unmounting, Unsubscribe ) page is closed
        return () => {
            console.log("DisplayBox component will unmount");
        }
        
    }, [counter]);


    return (
        <div className={`${s.box} ${s.dFlex}`}>
            {props.diffLevel}
            
            <button style={{ marginTop: '3em' }} onClick={handleClick}>Click me</button>
            
            <span>{ counter }</span>
        </div>
    );
}

export default DisplayBox;