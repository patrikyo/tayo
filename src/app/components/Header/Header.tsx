import ILink from "@/app/models/interfaces/link.interface";
import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faElevator } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../Navigation/Navigation";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Direction from "@/app/models/enums/direction.enum";

const Header = () => {
  const links: ILink[] = [
    { title: "Hem", href: "/" },
    { title: "Kontakta", href: "/contact" },
  ];
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.titleLink}>
        <span className={styles.titleContainer}>
          <h1 className={styles.title}>Tayo</h1>
          <FontAwesomeIcon icon={faElevator} className={styles.icon} />
        </span>
      </Link>

      <div className={styles.hamburgerMenu}>
        <HamburgerMenu links={links} />
      </div>

      <div className={styles.navigationContainer}>
        <Navigation direction={Direction.Row} links={links} />
      </div>
    </header>
  );
};

export default Header;
