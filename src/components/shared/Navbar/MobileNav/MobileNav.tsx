import { AnimatePresence, motion } from "framer-motion";

import { Category } from "components/shared/Category/Category";
import { NavItems } from "../Navbar";
import React from "react";
import styles from "./MobileNav.module.less";

interface MobileNavProps {
  mobileMenu: boolean;
  handleMobileMenu: () => void;
}

export const MobileNav = ({ mobileMenu, handleMobileMenu }: MobileNavProps) => {
  return (
    <>
      <AnimatePresence>
        {mobileMenu && (
          <motion.nav
            initial={{ y: -1000 }}
            animate={{ y: -2 }}
            exit={{ y: -1000 }}
            className={`${styles.mobileMenu} ${styles.active}`}
          >
            <ul className={styles.mobileMenu__navList}>
              {NavItems.slice(1).map((item, index) => (
                <Category key={`mobole-item-${index}`} item={item} />
              ))}
            </ul>
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
    </>
  );
};
