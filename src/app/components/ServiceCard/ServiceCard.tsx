import ServiceCardProp from "@/app/models/interfaces/ServiceCard.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ServiceCard.module.css";
const ServiceCard: React.FC<ServiceCardProp> = ({
  icon,
  title,
  description,
  button,
}) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <a href={button.link} className={styles.link}>
        {button.text}
      </a>
    </div>
  );
};

export default ServiceCard;
