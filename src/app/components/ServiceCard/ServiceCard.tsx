import ServiceCardProp from "@/app/models/interfaces/ServiceCard.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard: React.FC<ServiceCardProp> = ({
  icon,
  title,
  description,
  button,
}) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={button.link}>{button.text}</a>
    </div>
  );
};

export default ServiceCard;
