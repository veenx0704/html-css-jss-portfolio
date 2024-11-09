import React from 'react';
import SideMenu from '../components/SideMenu.js';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.homepageContainer}> 
            <SideMenu />
            <main className={styles.mainContent}> 
                {/* Home page content*/}
                <p>testing...</p>
            </main>
        </div>
    );
};

export default HomePage;
