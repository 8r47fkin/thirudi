import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Welcome to <span className='font-semibold'>Fightklub.in</span>🥊<br/>
        Join us for an electrifying journey of immersive learning!
         </h1>
    ),
    2: (
        <InfoBox 
            text="At fightklub.in, we're all about embracing a dynamic approach to learning. We believe in the power of playing concepts through thrilling games."
            link="/about"
            btnText="Learn more"
            />
    ),
    3: (
        <InfoBox 
            text="Let's kick off with engaging games meticulously designed to help us absorb concepts effortlessly. As we explore, we discover our passions and dive deep into mastering these concepts! It's all about the thrill of the game and the joy of learning."
            link="/projects"
            btnText="Some Games in Development"
            />
    ),
    4: (
        <InfoBox 
            text="Unleash your learning potential through play, while grabbing unbeatable deals at shop.fightklub.in!"
            link="/contact"
            btnText="Enquire for Early Access"
            />
    ),
}



const HomeInfo = ({ currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo