import { useEffect } from 'react'
export default function Start( { handleStart } ) {

    useEffect(() => {  gsap.to('.start', { scale: 1 })   }, [])
    
    return (
        <div className="start">
            <pre>Welcome to Experiment 3/22
                <br />Click start to begin..
            </pre>
            <button onClick={handleStart}>Start</button>
        </div>
    )
}
