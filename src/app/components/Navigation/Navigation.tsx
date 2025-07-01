import NavigationProps from "@/app/models/interfaces/NavigationProps.interface";
import styles from "./Navigation.module.css";
import Direction from "@/app/models/enums/direction.enum";
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
              <a href={ele.href}>{ele.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
