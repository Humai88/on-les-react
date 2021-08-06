import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className={styles.content}>
      <div>
        <NavLink to="/" className={styles.logoLink}>
          <span className={styles.logo}>on-les</span>
        </NavLink>
      </div>
      <div className={styles.links}>
        <NavLink to="/language">Язык</NavLink>
        <NavLink to="/math">Математика</NavLink>
        <NavLink to="/craft">Творчество</NavLink>
        <NavLink to="/world">Мир</NavLink>
      </div>
    </div>
  );
};
