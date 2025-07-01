import Link from "@/app/models/interfaces/Link.interface";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faElevator } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../Navigation/Navigation";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
  const links: Link[] = [
    { title: "Hem", href: "/" },
    { title: "Kontakta", href: "/contact" },
  ];
  return (
    <header className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Tayo</h1>
        <FontAwesomeIcon icon={faElevator} className={styles.icon} />
      </div>

      <div className={styles.hamburgerMenu}>
        <HamburgerMenu links={links} />
      </div>

      <div className={styles.navigationContainer}>
        <Navigation links={links} />
      </div>
    </header>
  );
};

export default Header;
