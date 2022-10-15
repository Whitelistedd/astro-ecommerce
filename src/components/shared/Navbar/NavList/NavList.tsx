import { NavItems } from "../Navbar";
import styles from "./NavList.module.less";

interface NavListProps {
  currentPath: string;
  className?: string;
}

export const NavList = ({ currentPath, className }: NavListProps) => {
  return (
    <ul className={`${className} ${styles.navList}`}>
      {NavItems.map((item, index) => (
        <li
          key={index}
          className={
            item === "home" && !currentPath
              ? styles.navList__navItem_active
              : currentPath === item
              ? styles.navList__navItem_active
              : ""
          }
        >
          <a
            className={styles.navList__navItem}
            href={`/${item === "home" ? "" : item}`}
          >
            {item.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
};
