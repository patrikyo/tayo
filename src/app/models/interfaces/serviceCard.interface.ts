import { IconProp } from "@fortawesome/fontawesome-svg-core";
import CardButton from "./cardButton.interface";

interface ServiceCardProp {
  icon: IconProp;
  title: string;
  description: string;
  button: CardButton;
}

export default ServiceCardProp;
