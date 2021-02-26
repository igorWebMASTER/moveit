// import { useContext } from 'react';

import styles from '../styles/components/MenuLeft.module.css';
// import { ChallengesContext } from '../contexts/ChallengesContext';

export function MenuLeft() {
  // const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.containerMenu}>
      <div className={styles.imgLogo}>
        <img src='/logo.svg' alt='' />
      </div>
      <div className={styles.buttonNavigation}>
        <button type='button'>
          <img src='/home.svg' alt='' />
        </button>
        <button type='button'>
          <img src='/award.svg' alt='' />
        </button>
      </div>
    </div>
  );
}
