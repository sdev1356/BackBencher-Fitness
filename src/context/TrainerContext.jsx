import Brooke from '../assets/Brooke.jpg';
import Brit from '../assets/Brit.jpg';
import Jeff from '../assets/Jeff.jpg';
import Andrei from '../assets/Andrei.jpg';
import Sergei from '../assets/Sergei.jpg'
import t6 from '../assets/nut1.jpg';
import Robin from '../assets/Robin.jpeg';
import t8 from '../assets/nut4.jpg';
import Rujuta from '../assets/Rujuta.jpg';
import Jo from '../assets/Jo.jpg';
import Gillian from '../assets/Gillian.jpg';
import susan from '../assets/susan.jpg';


import React, { useState, createContext } from 'react'

export const TrainerContext = createContext();

const TrainerContextProvider = (props) => {
    const trainer_data = [
        {
            id: 1,
            name: 'Brooke Ence',
            gender: `female`,
            pic: Brooke,
            type: 'gym',
            qualification: 'Personal Trainer (ACE-CPT)',
            experience: 6,
            slug: 'michelle'  
         },
        {
            id: 2,
            name: 'Brittany Coutu',
            gender: `female`,
            pic: Brit,
            type: 'gym',
            qualification: 'Personal Trainer (ACE-CPT)',
            experience: 4,
            slug: 'stacy'  
       },
        {
            id: 3,
            name: 'Jeff Seid',
            gender: `male`,
            pic: Jeff,
            type: 'gym',
            qualification: 'ACSM Certified Personal Trainer (CPT)',
            experience: 5,
            slug: 'christy'        
        },
        {
            id: 4,
            name: 'Andrei Dieu',
            gender: `male`,
            pic: Andrei,
            type: 'gym',
            qualification: 'Certified Personal Fitness Trainer (CPFT)',
            experience: 6,
            slug: 'david'        
        },
        {
            id: 5,
            name: 'Sergei Constance',
            gender: `male`,
            pic: Sergei,
            type: 'gym',
            qualification: 'International Fitness Professionals Association Personal Fitness Training Certification (IFPA - PFT)',
            experience: 7,
            slug: 'juan'        
        },
        {
            id: 6,
            name: 'Gillian McKeith',
            gender: `female`,
            pic: Gillian,
            type: 'nut',
            qualification: 'MS Nutrition and Food Science from University of California-Berkeley',
            experience: 5,
            slug: 'angela'  
        },
        {
            id: 7,
            name: 'Susan Powter',
            gender: `female`,
            pic: susan,
            type: 'nut',
            qualification: 'PhD in Applied Nutrition from Cornell University',
            experience: 7,
            slug: 'sophie'        
        },
        {
            id: 8,
            name: 'Robin Miller',
            gender: `female`,
            pic: Robin,
            type: 'nut',
            qualification: 'MS in Nutrition and Food Science from University of Georgia',
            experience: 3,
            slug: 'janie'        
        },
        {
            id: 9,
            name: 'RUJUTA. DIWEKAR',
            gender: `female`,
            pic:Rujuta ,
            type: 'nut',
            qualification: 'BS in Clinical Nutrition from Syracuse University',
            experience: 2,
            slug: 'isabella' 
        },
        {
            id: 10,
            name: 'Jo Linder',
            gender: `male`,
            pic: Jo,
            type: 'gym',
            qualification: 'Certified Personal Fitness Trainer (CPFT)',
            experience: 6,
            slug:'cj'
        }
    ]

    const [trainers] = useState(trainer_data);

    return (
        <TrainerContext.Provider value={[...trainers]}>
            {props.children}
        </TrainerContext.Provider>
    )
}

export default TrainerContextProvider

