import { useState } from 'react';

import styles from '../styles/components/MenuLeft.module.css';
// import { ChallengesContext } from '../contexts/ChallengesContext';

export function MenuLeft() {
  // const { level, closeLevelUpModal } = useContext(ChallengesContext);
  const [buttonMenu, setButtonMenu] = useState();
  return (
    <div className={styles.containerMenu}>
      <div className={styles.imgLogo}>
        <img src='/logo.svg' alt='' />
      </div>
      <div className={styles.buttonNavigation}>
        <div className={styles.slideButtonMenu}></div>
        <button type='button'>
          <a href='#' onClick={() => setButtonMenu(true)}>
            <img src='/home.svg' alt='' />
          </a>
        </button>
        <button type='button'>
          <img src='/award.svg' alt='' />
        </button>
      </div>
    </div>
  );
}
