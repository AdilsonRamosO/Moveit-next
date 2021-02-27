import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/75184157?s=460&u=a66fc9cfb3a2148ae200ae9dbc119c7ea5120940&v=4" alt="Adilson Ramos"/>
            <div>
                <strong>Adilson Ramos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}