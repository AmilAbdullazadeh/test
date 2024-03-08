import Icon from "../../components/Icons/Icon.jsx";
import Button from "../../components/Button/Button.jsx";
import style from "./portfolio.module.css";
import {Section} from "../../components/Section/Section.jsx";

// import imageFacebook from "../../assets/images/facebook.svg"
// import imageInstagram from "../../assets/images/instagram.svg"
// import imageTwitter from "../../assets/images/twitter.svg"

const Portfolio = (props) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.profilInfo}>

          <Section
              title="Hello , I’m Amil"
              description="Full-stack Web and Mobile Engineer"
          />

          <Button
              text="Get In Touch"
          />

          <div className={style.icons}>
            <Icon
                iconClass="fa-brands fa-github"
            />
            <Icon
                iconClass="fa-brands fa-twitter"
            />
            <Icon
                iconClass="fa-solid fa-basketball"
            />
          </div>

        </div>
        <div className={style.profilImage}>
          <img src={props.image} alt="profil" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
