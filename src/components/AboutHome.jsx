import React from 'react'
 import {TrainerContext} from '../context/TrainerContext';

import {GiMuscleUp,GiKnifeFork, GiHeartBeats, GiRobe} from 'react-icons/gi';

const AboutHome=()=>{
    const value=React.useContext(TrainerContext);
    return (
        <section className="about-home">
            <h1 className="about-home__heading">who are we</h1> 
            <p className="about-home__block">
                <span className="lead">We</span>, at BackBencher Fitness are <strong>the most effective lifestyle studio</strong> in the country.We, at  BackBencher , believe in living healthy and happy. Our focus is to help you guide you to a better life style. We focus on nutrition, cross-fit exercise, endurance training, increasing positivity in life and much more.  Our trainers are there to help you whenever you need. They will guide you, mentor you, motivate you and help you become the best YOU. 
            </p>
            <h1 className="about-home__heading about-home__heading--sub">
                Our Goal
            </h1>
            <p className="about-home__block ">
                 <span>We</span>, at  BackBencher Fitness, promise you to help you become healthy, fit, energetic, mentally healthy and calm. Our first priority is you well being and good health both physically and mentally.
            </p>
            <div className="about-home-flex">
                <div className="about-home__sub-block">
                    <GiMuscleUp  className="home-icon"/>
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Core Body exercises</h4>
                        <p className="muted-paragraph">
                        Muscle Building A Healthier You The unique program I’ve developed will help burn calories, boost metabolism and improve your overall health. A combination of strategic exercises and a healthy diet will have you in tip-top shape.
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiRobe className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Personal Trainers</h4>
                        <p className="muted-paragraph">
                            Weight-loss, maintaining weight and muscle, healthier heart and fighting cholesterol, getting leaner, developing core strength, gaining muscle, building impressive physique, increasing 
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiKnifeFork className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Nutrition and planning</h4>
                        <p className="muted-paragraph">DIET plays a very important role in our life without it we cannot build our muscles. diet is different for veg. & non veg.,also not only diet will help you to make a perfect body training is also equally important.</p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                   <GiHeartBeats className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Yoga & Spa</h4>
                        <p className="muted-paragraph">
                          
                            Health and Fitness is not only about what your body looks like on the outside, but also on the inside! I will make sure your body and mind find the right balance. What are you waiting for? Book a session today!
                        </p>
                    </div>
                </div>

            </div>
           
        </section> 
    )
}

export default AboutHome


// className="abhout-home__heading"