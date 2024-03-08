import style from "./icon.module.css";

const Icon = (props) => {
  return (
    <span className={style.icon}>
      <i className={props.iconClass}></i>
      {/*  <img src={props.imageSrc} alt={props.imageName}/>*/}
    </span>
  );
};

export default Icon;
