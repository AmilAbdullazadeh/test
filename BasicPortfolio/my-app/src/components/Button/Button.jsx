const Button = (props) => {
  return <>
    <button className="button">{props.text || 'Submit'}</button>
  </>;
};

export default Button;
