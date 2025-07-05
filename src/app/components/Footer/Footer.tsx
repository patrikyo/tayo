import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Om oss</h2>
      <p className={styles.description}>
        Välkommen till vårt hisskonsultföretag, där vi erbjuder personliga och
        skräddarsydda tjänster för att hjälpa dig att fatta välgrundade beslut
        om dina vertikala transportbehov. Som ett enmansbolag kan vi ge dig den
        individuella uppmärksamhet och expertis du förtjänar.
      </p>
    </div>
  );
};

export default Footer;
