import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const onChangeHandler = () => {
    setNav(!nav);
  };
  const hideNavbar = () => {
    setNav(false);
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.toggler}
        checked={nav}
        onChange={onChangeHandler}
      />
      <div className={styles.hamburger}>
        <div></div>
      </div>

      <div className={styles.menu}>
        <div>
          <div>
            <ul>
              <li onClick={hideNavbar}>
                <NavLink to="/" activeClassName={styles.active}>
                  Главная
                </NavLink>
              </li>
              <li onClick={hideNavbar}>
                <NavLink to="/language" activeClassName={styles.active}>
                  Язык
                </NavLink>
              </li>
              <li onClick={hideNavbar}>
                <NavLink to="/math" activeClassName={styles.active}>
                  Математика
                </NavLink>
              </li>
              <li onClick={hideNavbar}>
                <NavLink to="/craft" activeClassName={styles.active}>
                  Творчество
                </NavLink>
              </li>
              <li onClick={hideNavbar}>
                <NavLink to="/world" activeClassName={styles.active}>
                  Мир
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
