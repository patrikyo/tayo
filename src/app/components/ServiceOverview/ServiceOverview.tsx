import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./ServiceOverview.module.css";
import serviceCards from "@/app/data/serviceCards";

const ServiceOverview = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Våra tjänster</h3>
      <p className={styles.description}>
        Med stor kunskap inom rulltrappor och hissar är vi heltäckande men i ett
        litet företag som kan ge personlig service. Det är viktigt för oss att
        vi har en nära kontakt med våra kunder.
      </p>
      <ul className={styles.listContainer}>
        {serviceCards.map((ele) => (
          <li key={ele.title}>
            <ServiceCard
              icon={ele.icon}
              title={ele.title}
              description={ele.description}
              button={ele.button}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceOverview;
