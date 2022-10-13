import { AnimatePresence, motion } from "framer-motion";

import { Cart } from "./Cart/Cart";
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu((prev) => (prev ? false : true));
  };

  const handleCartMenu = () => {
    setShowCartMenu((prev) => (prev ? false : true));
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
          <img
            onClick={() => handleCartMenu()}
            className={styles.nav__cart}
            src={cartSRC}
            alt="cart"
          />
          <Cart showCartMenu={showCartMenu} handleCartMenu={handleCartMenu} />
        </div>
      </nav>
      <MobileNav
        showMobileMenu={showMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
    </header>
  );
};
