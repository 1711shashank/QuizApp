import { Button } from '@mui/material'
import React from 'react'

const Home = ({ onNext }) => {
    return (
        <>
            <div>
                <p> The Daily GK Quiz</p>
                <Button variant="contained" onClick={onNext}>Take Quiz</Button>
            </div>
        </>
    )
}

export default Home