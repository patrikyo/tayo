import {
  faAngleLeft,
  faCircleCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ThankYouMessage.module.css";
import Link from "next/link";

const ThankYouMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={styles.icon}
          color="#95c33f"
          aria-hidden="true"
        />
        <h2>Tack för ditt meddelande!</h2>
      </div>
      <div className={styles.messageContainer}>
        <p>
          Vi har tagit emot ditt meddelande och återkommer till dig inom kort.
        </p>

        <div className={styles.timeContainer}>
          <FontAwesomeIcon
            icon={faClock}
            aria-hidden="true"
            className={`${styles.icon} ${styles.iconSmall}`}
            color="#95c33f"
          />
          <span>Vi återkopplar vanligvis inom 24 timmar på vardagar</span>
        </div>
        <Link href="/" className={styles.link}>
          <div className={styles.linkBtnContainer}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className={`${styles.icon} ${styles.iconExtraSmall}`}
            />
            <span>Till startsidan</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouMessage;
