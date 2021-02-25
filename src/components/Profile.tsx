import React from 'react';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/igorWebMASTER.png' alt='profile' />

      <div>
        <strong>Igor Ribeiro</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 1
        </p>
      </div>
    </div>
  );
}