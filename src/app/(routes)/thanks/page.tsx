import Header from "@/app/components/Header/Header";
import ThankYouMessage from "@/app/components/Thanks/ThankYouMessage";
import styles from "./page.module.css";
import Footer from "@/app/components/Footer/Footer";
const Thanks = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ThankYouMessage />
      <Footer />
    </div>
  );
};

export default Thanks;
