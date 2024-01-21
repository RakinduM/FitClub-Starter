import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = {type: 'tween', duration: 3}
  return (
    <div className="hero">
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
            {/*the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={transition}
                ></motion.div>
                <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>

            {/*hero text*/}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/*figures*/}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='1' preFix="+" />
                    </span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                <span>
                        <NumberCounter end={978} start={800} delay='1' preFix="+" />
                    </span>
                    <span>Memebers Joined</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={40} start={1} delay='1' preFix="+" />
                    </span>
                    <span>Fitness Programs</span>
                </div>
            </div>

            {/*hero buttons*/}
            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>

        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>
            <motion.div
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={{...transition, type: 'spring'}}
            className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            {/*hero images*/}
            <img src={hero_image} alt="" className='hero-image' />
            <motion.img 
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={{...transition, type: 'spring'}}
            src={hero_image_back} alt="" className='hero-image-back' />
            {/*calories image*/}
            <motion.div 
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={{...transition, type: 'spring'}}
            className="calories">
                <img src={calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
                
            </motion.div>
        </div>
    </div>
  )
}

export default Hero