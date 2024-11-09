import React from 'react';
import styles from '../styles/SideMenu.module.css';

const SideMenu = () => {
    return (
        <aside className={styles.sideMenu}>
            <div className={styles.name}>
                taiki tsukahara
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li className={styles.menuItem}>about me</li>
                    <li className={styles.menuItem}>projects</li>
                    <li className={styles.menuItem}>skills</li>
                    <li className={styles.menuItem}>resume</li>
                    <li className={styles.menuItem}>contact me</li>
                </ul>
            </nav>
            <div className={styles.divider}></div> {/* Divider Element */}
        </aside>
    );
};

export default SideMenu;
