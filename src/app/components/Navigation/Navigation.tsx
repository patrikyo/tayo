import NavigationProps from "@/app/models/interfaces/NavigationProps.interface";
import styles from "./Navigation.module.css";
import Direction from "@/app/models/enums/direction.enum";
import Link from "next/link";
const Navigation: React.FC<NavigationProps> = ({ links, direction }) => {
  return (
    <nav>
      <ul
        className={`${styles.listContainer} ${
          direction === Direction.Row ? styles.row : styles.column
        } `}
      >
        {links.map((ele) => {
          return (
            <li key={ele.title}>
              <Link href={ele.href}>{ele.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
