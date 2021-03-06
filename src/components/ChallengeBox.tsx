import styles from '../styles/components/ChallengeBox.module.css';
import {useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';
import {CountdownContext} from '../contexts/CountdownContext';

export function ChallengeBox()
{

  const {activeChallenge, resetChallenge, completedChallenge} = useContext(ChallengesContext);
  const {resetCountDown} = useContext(CountdownContext)

  function handleChallengeSucceded(){
    completedChallenge()
    resetCountDown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountDown()
  }

  return(

      <div className={styles.challengeBoxContainer}>
        {
          activeChallenge
          ? (
            <div className={styles.challengeActive}>
              <header>Ganhe {activeChallenge.amount}xp</header>
              <main>
                <img src={`icons/${activeChallenge.type}.svg`} alt='icon'/>
                <strong> Novo desafio</strong>
                <p>{activeChallenge.description}</p>
              </main>

              <footer>
                <button
                  type='button'
                  className={styles.challengeFailedButton}
                  onClick={handleChallengeFailed}
                >Falhei</button>
                <button
                type='button'
                className={styles.challengeSucceeddButton}
                onClick={handleChallengeSucceded}
                >Completei</button>
              </footer>
            </div>
          )
          : (
            <div className={styles.challengeBoxNotActive}>
              <strong>Finalize um ciclo para receber um desafio</strong>
              <p>
                <img src='icons/level-up.svg' alt='Level up'/>
                Avance de level completando desafios.
              </p>
            </div>
          )
        }

      </div>

  )
}
