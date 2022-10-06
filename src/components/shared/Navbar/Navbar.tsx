import { AnimatePresence, motion } from "framer-motion";

import { Category } from "../Category/Category";
import { Image } from "@astrojs/image/components";
import arrowSRC from "/assets/shared/icon-arrow-right.svg";
import cartSRC from "/assets/shared/icon-cart.svg";
import logoSRC from "/assets/shared/logo.svg";
import mobileMenuSRC from "/assets/shared/mobileMenu.svg";
import styles from "./Navbar.module.less";
import { useState } from "react";

export const NavItems = ["home", "headphones", "speakers", "earphones"];

interface NavbarProps {
  currentPath: string;
}

export const Navbar = ({ currentPath }: NavbarProps) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prev) => (prev ? false : true));
  };

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.nav__wrap}>
          <img
            className={styles.nav__mobileIcon}
            src={mobileMenuSRC}
            alt="mobileMenu"
            onClick={() => handleMobileMenu()}
          />
          <img className={styles.nav__logo} src={logoSRC} alt="logo" />
          <ul className={styles.nav__navList}>
            {NavItems.map((item, index) => (
              <a
                key={`item-${index}`}
                className={styles.nav__navItem}
                href={`/${item === "home" ? "" : item}`}
              >
                <li
                  className={
                    item === "home" && !currentPath
                      ? styles.nav__navItem_active
                      : currentPath === item
                      ? styles.nav__navItem_active
                      : ""
                  }
                >
                  {item.toUpperCase()}
                </li>
              </a>
            ))}
          </ul>
          <img className={styles.nav__cart} src={cartSRC} alt="logo" />
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenu && (
          <motion.nav
            initial={{ y: -500 }}
            animate={{ y: -2 }}
            exit={{ y: -500 }}
            className={`${styles.mobileMenu} ${styles.active}`}
          >
            <div className={styles.mobileMenu__wrap}>
              <ul className={styles.mobileMenu__navList}>
                {NavItems.slice(1).map((item, index) => (
                  <Category key={`mobole-item-${index}`} item={item} />
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenu && (
          <motion.nav
            onClick={() => handleMobileMenu()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className={styles.overlay}
          />
        )}
      </AnimatePresence>
    </header>
  );
};
