import { AnimatePresence, motion } from "framer-motion";

import { Category } from "../Category/Category";
import { MobileNav } from "./MobileNav/MobileNav";
import { NavList } from "./NavList/NavList";
import cartSRC from "assets/shared/IconCart.svg";
import logoSRC from "assets/shared/logo.svg";
import mobileMenuSRC from "assets/shared/Mobile-menu.svg";
import styles from "./Navbar.module.less";
import { useState } from "react";

export const NavItems = ["home", "headphones", "speakers", "earphones"];

interface NavbarProps {
  currentPath: string;
  className?: string;
}

export const Navbar = ({ currentPath, className }: NavbarProps) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prev) => (prev ? false : true));
  };

  return (
    <header>
      <nav className={`${currentPath === "" ? styles.home : ""} ${styles.nav}`}>
        <div className={styles.nav__wrap}>
          <img
            className={styles.nav__mobileIcon}
            src={mobileMenuSRC}
            alt="mobileMenu"
            onClick={() => handleMobileMenu()}
          />
          <a className={styles.nav__logo} href="/">
            <img src={logoSRC} alt="logo" />
          </a>
          <NavList currentPath={currentPath} />
          <img className={styles.nav__cart} src={cartSRC} alt="logo" />
        </div>
      </nav>
      <MobileNav mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu} />
    </header>
  );
};
