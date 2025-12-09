// src/pages/Settings/SettingsPage.jsx
import React, { useState } from 'react';
import styles from './SettingsPage.module.css'; 

const SettingsPage = () => {
  // State for the first settings card (Editable fields)
  const [email, setEmail] = useState('hello@designlyft.co');
  const [password, setPassword] = useState('********'); 
  const [location, setLocation] = useState('Mombasa');
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [isLocationEditing, setIsLocationEditing] = useState(false);

  const handleSaveChanges = () => {
    alert('Changes saved!'); 
    setIsEmailEditing(false);
    setIsPasswordEditing(false);
    setIsLocationEditing(false);
    
  };

  // State for the second settings card (View/Change)
  const [username] = useState('Bmg');
  const [defaultLocation] = useState('You can change your current default location');
  const passwordMessage = "You signed up via Google, so you don't have a password.";

  const handleChangeUsername = () => {
    alert('Redirect to username change flow or open modal.');
  };

  const handleChangePassword = () => {
    alert('Redirect to password change flow or open modal.');
  };

  const handleChangeDefaultLocation = () => {
    alert('Redirect to default location change flow or open modal.');
  };

  return (
    <div className={styles.settingsPageContainer}>
      <h1 className={styles.pageTitle}>Settings</h1> {/* Page title */}

      {/* Editable Settings Card */}
      <div className={`${styles.settingsCard} ${styles.editableCard}`}>
        <h3>Account Details</h3>
        <div className={styles.settingItem}>
          <label htmlFor="email">Email</label>
          {isEmailEditing ? (
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <input type="email" id="email" value={email} readOnly />
          )}
          <button className={styles.editButton} onClick={() => setIsEmailEditing(!isEmailEditing)}>
            {isEmailEditing ? 'Done' : '✏️'}
          </button>
        </div>

        <div className={styles.settingItem}>
          <label htmlFor="password-old">Password</label>
          {isPasswordEditing ? (
            <input
              type="password"
              id="password-old"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <input type="password" id="password-old" value={password} readOnly />
          )}
          <button className={styles.editButton} onClick={() => setIsPasswordEditing(!isPasswordEditing)}>
            {isPasswordEditing ? 'Done' : '✏️'}
          </button>
        </div>

        <div className={styles.settingItem}>
          <label htmlFor="location-old">Location</label>
          {isLocationEditing ? (
            <input
              type="text"
              id="location-old"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          ) : (
            <input type="text" id="location-old" value={location} readOnly />
          )}
          <button className={styles.editButton} onClick={() => setIsLocationEditing(!isLocationEditing)}>
            {isLocationEditing ? 'Done' : '✏️'}
          </button>
        </div>
        <button className={styles.saveChangesButton} onClick={handleSaveChanges}>Save Changes</button>
      </div>

      {/* View/Change Settings Card */}
      <div className={`${styles.settingsCard} ${styles.viewChangeCard}`}>
        <h3>User Preferences</h3>
        <div className={styles.settingItem}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} readOnly />
          <button className={`${styles.changeButton} ${styles.primary}`} onClick={handleChangeUsername}>Change</button>
        </div>
        <div className={styles.settingItem}>
          <label htmlFor="password-new">Password</label>
          <input type="text" id="password-new" value={passwordMessage} readOnly />
          <button className={`${styles.changeButton} ${styles.secondary}`} onClick={handleChangePassword}>Change</button>
        </div>
        <div className={styles.settingItem}>
          <label htmlFor="location-new">Location</label>
          <input type="text" id="location-new" value={defaultLocation} readOnly />
          <button className={`${styles.changeButton} ${styles.primary}`} onClick={handleChangeDefaultLocation}>Change</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;