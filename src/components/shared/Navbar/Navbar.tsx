import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Cart } from "./Cart/Cart";
import { Category } from "../Category/Category";
import { MobileNav } from "./MobileNav/MobileNav";
import { NavList } from "./NavList/NavList";
import cartSRC from "assets/shared/IconCart.svg";
import logoSRC from "assets/shared/logo.svg";
import mobileMenuSRC from "assets/shared/Mobile-menu.svg";
import { shoppingCart } from "stores/cart";
import styles from "./Navbar.module.less";
import { useStore } from "@nanostores/react";

export const NavItems = ["home", "headphones", "speakers", "earphones"];

interface NavbarProps {
  currentPath: string;
  className?: string;
}

export const Navbar = ({ currentPath, className }: NavbarProps) => {
  const addedItem = useStore(shoppingCart).addedItem;
  const cartCount = useStore(shoppingCart).products.length;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu((prev) => (prev ? false : true));
  };

  const handleCartMenu = () => {
    setShowCartMenu((prev) => (prev ? false : true));
  };

  const handleOverlay = () => {
    showMobileMenu ? handleMobileMenu() : handleCartMenu();
  };

  useEffect(() => {
    if (addedItem) {
      setShowCartMenu(true);
      shoppingCart.setKey("addedItem", false);
    }
  }, [addedItem]);

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
          <a className={styles.nav__logoWrap} href="/">
            <img className={styles.nav__logo} src={logoSRC} alt="logo" />
          </a>
          <NavList currentPath={currentPath} />
          <div onClick={() => handleCartMenu()} className={styles.nav__cart}>
            {cartCount > 0 && (
              <div className={styles.nav__badge}>
                <p className={styles.nav__badge__badgeNumber}>{cartCount}</p>
              </div>
            )}
            <img src={cartSRC} alt="cart" />
          </div>
          <Cart showCartMenu={showCartMenu} handleCartMenu={handleCartMenu} />
        </div>
      </nav>
      <MobileNav
        showMobileMenu={showMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <AnimatePresence>
        {(showCartMenu || showMobileMenu) && (
          <motion.nav
            onClick={() => handleOverlay()}
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
