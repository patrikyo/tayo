"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HamburgerMenu.module.css";
import Navigation from "../Navigation/Navigation";
import HamburgerMenuProps from "@/app/models/interfaces/HamburgerMenuProps.interface";
import { useState } from "react";
import Direction from "@/app/models/enums/direction.enum";

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className={styles.toggleBtn}
        aria-expanded={isMenuOpen}
        aria-controls="hamburger-navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {!isMenuOpen && (
          <FontAwesomeIcon
            icon={faBars}
            size="3x"
            color="#000000"
            aria-hidden="true"
          />
        )}

        {isMenuOpen && (
          <FontAwesomeIcon
            icon={faClose}
            size="3x"
            color="#000000"
            aria-hidden="true"
          />
        )}
      </button>

      {isMenuOpen && (
        <div id="hamburger-navigation">
          <Navigation direction={Direction.Column} links={links} />
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
