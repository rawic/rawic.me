import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import Logo from "../components/logo";
import * as headerStyles from "./header.module.sass";

const Header = ({ siteTitle }) => (
  <header className={headerStyles.pageHeader}>
    <h1 className={headerStyles.logo}>
      <Link
        to={"/"}
        aria-label="RAWIC - Rafał Wichowski, Strona główna"
        rel="index"
      >
        <Logo />
        <span>{siteTitle}</span>
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
