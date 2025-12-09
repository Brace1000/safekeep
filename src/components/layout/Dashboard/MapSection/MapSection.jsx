// src/components/dashboard/MapSection/MapSection.jsx
import React from 'react';
import styles from './MapSection.module.css'; 

const MapSection = () => {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapPlaceholder}>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>🔍</span>
          <input type="text" placeholder="Search for a location" className={styles.searchInput} />
        </div>
        {}
      </div>
      
      <button className={styles.reportIncidentButton}>
        <span className={styles.buttonText}>Report an Incident</span> <span className={styles.arrowIcon}>➔</span>
      </button>
    </div>
  );
};

export default MapSection;