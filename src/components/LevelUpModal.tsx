import { useContext } from 'react';

import styles from '../styles/components/LevelUpModal.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Voce alcançou um novo level</p>

        <button type='button'>
          <img
            src='/icons/close.svg'
            alt='fechar'
            onClick={closeLevelUpModal}
          />
        </button>
      </div>
    </div>
  );
}
