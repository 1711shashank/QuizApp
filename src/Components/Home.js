import Logo from './images/logo.png';
import React from 'react'

const Home = ({ onNext }) => {
    return (
        <>
            <div className='home'>
                <p className='home-head'> Quiz App </p>
                
                <img src={Logo} width="200px" alt=''/>

                <p className='home-name'> Welcome <br /> Kumar Shashank </p>

                <button className='home-button' onClick={onNext}>Start Quiz</button>
            </div>
        </>
    )
}

export default Home