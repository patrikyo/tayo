import NavigationProps from "@/app/models/interfaces/NavigationProps.interface";
import styles from "./Navigation.module.css";
const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav>
      <ul className={styles.listContainer}>
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
