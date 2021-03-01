import { Profile } from '../components/Profile'
import { ExperienceBar } from '../components/ExperienceBar'
import { ChallengeBox } from '../components/ChallengeBox'

import Head from 'next/head'
import styles from '../styles/components/Home.module.css'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move9</title>
      </Head>
      <ExperienceBar />
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
    </div>
  )
}
