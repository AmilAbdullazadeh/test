import './Button.css';

export const Button = (props) => {
    return (
        <button
            style={{backgroundColor: props.color || 'green'}}
            className={props.bg || ''}
        >
            {props.text || 'Submit'}
        </button>
    );
}

// Stateless Functional Component