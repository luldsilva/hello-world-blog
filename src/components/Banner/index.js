import styles from "./Banner.module.css";
import coloredCircle from "assets/circulo_colorido.png";
import myPhoto from "assets/minha_foto.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo Blog!</h1>

        <p className={styles.paragraph}>Texto de teste</p>
      </div>
      <div className={styles.image}>
        <img
          className={styles.coloredCircle}
          src={coloredCircle}
          aria-hidden={true}
          alt=""
        />
        <img
        className={styles.myPhoto} 
        src={myPhoto}
        alt="Foto sorrindo"
        />
      </div>
    </div>
  );
};

export default Banner;
