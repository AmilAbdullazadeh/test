import s from './displaybox.module.css';

function DisplayBox(props) {
    return (
        <div className={`${s.box} ${s.dFlex}`}>
            { props.diffLevel }
        </div>
    );
}

export default DisplayBox;