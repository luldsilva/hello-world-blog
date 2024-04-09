import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({ children, to }) => {
  const localization = useLocation();

  console.log("path: ", localization);
  console.log("to: ", to);
  console.log("chil: ", children);

  return (
    <Link
      className={`${styles.link}
            ${localization.pathname === to ? styles.destacatedLink : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
