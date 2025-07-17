import Header from "@/app/components/Header/Header";
import ThankYouMessage from "@/app/components/Thanks/ThankYouMessage";
import styles from "./page.module.css";
import Footer from "@/app/components/Footer/Footer";
const Thanks = () => {
  return (
    <>
      <Header />
      <ThankYouMessage />
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </>
  );
};

export default Thanks;
