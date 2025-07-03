import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import ServiceCardProp from "../models/interfaces/ServiceCard.interface";

const serviceCards: ServiceCardProp[] = [
  {
    icon: faUsersLine,
    title: "Service",
    description:
      "Vi tillhandahåller 24/7 akutreparationstjänster, så du kan lita på oss när du behöver det som mest. Vi är alltid redo att svara på alla hiss- eller rulltrappsnödsituationer och säkerställa att din byggnad är säker och tillgänglig vid alla tider.",
    button: { text: "Läs mer om Service", link: "#test" },
  },
  {
    icon: faUsersLine,
    title: "Felsökning & reperation",
    description:
      "Med en erfaren och certifierade tekniker har vi expertisen att diagnostisera och reparera alla typer av hiss- och rulltrappsystem, från hydrauliska till drag- och maskinrumslösa system.",
    button: { text: "Läs mer om Felsökning & reperation", link: "#test" },
  },
  {
    icon: faUsersLine,
    title: "Underhåll och uppföljning",
    description:
      "För att förebygga framtida problem kan hisskonsulten rekommendera en underhållsplan för kundens hiss- eller rulltrappssystem.",
    button: { text: "Läs mer om Underhåll och uppföljning", link: "#test" },
  },
];

export default serviceCards;
