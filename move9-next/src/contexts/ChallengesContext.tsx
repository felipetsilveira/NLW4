import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    resetChallenge: () => void;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [ level, setLevel ] = useState(1)
    const [ currentExperience, setCurrentExperience ] = useState(0)
    const [ challengesCompleted, setChallengesCompleted ] = useState(0)
    const [ activeChallenge, setActiveChallenge ] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[ramdomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider value={{ level: 10, 
            currentExperience, challengesCompleted, activeChallenge, experienceToNextLevel, 
            startNewChallenge, resetChallenge, levelUp }}>
            {children}
        </ChallengesContext.Provider>
    )
}