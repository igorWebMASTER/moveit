import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';

import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
      </div>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
