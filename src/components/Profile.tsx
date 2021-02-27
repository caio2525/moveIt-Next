import styles from '../styles/components/Profile.module.css';
import {useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';

export function Profile(){
  const {level} = useContext(ChallengesContext);
  return(
    <div className={styles.profileContainer}>
      <img src='https://github.com/caio2525.png' alt='Caio Fernandes'/>
      <div>
        <strong>Caio Fernandes</strong>


        <p>
          <img src='icons/level.svg' alt='level'/>
          Level {level}
        </p>
      </div>
    </div>
  )
}
