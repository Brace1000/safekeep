// src/components/dashboard/DashboardLayout/DashboardLayout.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DashboardLayout.module.css'; 

const DashboardLayout = ({ children, user }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    const theme = newTheme ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.dashboardHeaderText}>
          <button onClick={toggleTheme} className={styles.themeToggle} title="Toggle Dark Mode">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className={styles.userProfile}>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Profile" className={styles.profilePic} />
          <p className={styles.username}>{user?.name || 'John Doe'}</p>
          <p className={styles.userEmail}>{user?.email || 'johndoe@gmail.com.com'}</p>
        </div>
        <nav className={styles.mainNav}>
          <ul>
            <li className={styles.navItemWrapper}>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                <span className={styles.icon}>🗺️</span> Map
              </NavLink>
            </li>
            <li className={styles.navItemWrapper}>
              <NavLink to="/alerts" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                 <span className={styles.icon}>🚨</span> Report Incident
              </NavLink>
            </li>
            <li className={styles.navItemWrapper}>
              <NavLink to="/trusted-contacts" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                 <span className={styles.icon}>🤝</span> Trusted Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className={styles.sosButton}>SOS</button>
        <div className={styles.bottomNav}>
          <NavLink to="/settings" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
            <span className={styles.icon}>⚙️</span> Settings
          </NavLink>
          <NavLink to="/login" className={`${styles.navItem} ${styles.logoutItem}`}>
            <span className={styles.icon}>🚪</span> Logout
          </NavLink>
        </div>
      </aside>
      <main className={styles.mainContent}>
        {children} {}
      </main>
    </div>
  );
};

export default DashboardLayout;