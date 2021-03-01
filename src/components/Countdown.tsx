import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      {/* <div className='setTimeout'>
        Selecione o tempo do ciclo:
        <br />
        <button type='button' onClick={setTimeoutNumber(15)}>
          15 min
        </button>
        <button type='button' onClick={setTimeoutNumber(25)}>
          25 min
        </button>
      </div> */}
      <div>
        <div className={styles.countdownContainer}>
          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </div>
        </div>

        {hasFinished ? (
          <button className={styles.countDownButton} disabled>
            <div>Ciclo encerrado </div>
            <span>
              <Image
                src='/icons/check_circle.svg'
                alt='teste'
                width={20}
                height={20}
              />
            </span>
          </button>
        ) : (
          <>
            {isActive ? (
              <button
                type='button'
                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>
            ) : (
              <button
                type='button'
                className={styles.countDownButton}
                onClick={startCountdown}
              >
                Iniciar um ciclo
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}
