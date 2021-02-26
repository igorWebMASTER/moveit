import styles from '../styles/components/ChallengeBox.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { motion } from 'framer-motion';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}</header>

          <main>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 180, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <img src={`icons/${activeChallenge.type}.svg`} alt='svg' />
            </motion.div>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type='button'
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Avance de nível completando este desafio!
          </p>
        </div>
      )}
    </div>
  );
}
