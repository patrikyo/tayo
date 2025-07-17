import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import styles from "./page.module.css";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Kontakta oss</h2>
        <p className={styles.description}>
          Fyll i formuläret nedan så hör vi av oss så fort som möjligt!
        </p>

        <div className={styles.contactContainer}>
          <Contact />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
