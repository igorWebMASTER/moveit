import { useContext } from 'react';

import styles from '../styles/components/LevelUpModal.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { motion } from 'framer-motion';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
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
      </motion.div>
    </div>
  );
}
