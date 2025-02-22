import React from 'react';
import './GuideBookCard.css';
import NavigationTwo from '../Navigation/NavigationTwo';
import Header from '../Header/Header';

const GuideBookCard = () => {
    return (
        <>
            <Header />
            <div className='GuideBookCard-container'>
                <div className='guidebookCard-mainContent'>
                  <h2>How To Work</h2>
                  <h3>With Cards</h3>
                  <hr className='horizontal-line'/>
                <p className='text-content'>Working with angel cards involves connecting with spiritual guidance through symbols and messages. Each card typically represents an aspect of spiritual wisdom or guidance, offering insights and encouragement. When using angel cards, practitioners often focus on setting intentions, asking specific questions, and interpreting the cards' meanings intuitively. The process can provide clarity, comfort, and a sense of divine support, helping individuals navigate challenges or decisions with greater spiritual awareness and insight. Angel cards are valued for their gentle yet profound messages, fostering a deeper connection to one's inner wisdom and the guidance of spiritual beings.
                messages. Each card typically represents an aspect of spiritual wisdom or guidance, offering insights and encouragement. When using angel cards, practitioners often focus on setting intentions, asking specific questions, and interpreting the cards' meanings intuitively. The process can provide clarity, comfort, and a sense of divine support, helping individuals navigate challenges or decisions with greater spiritual awareness and insight. Angel cards are valued for their gentle yet profound messages, fostering a deeper connection to one's inner wisdom and the guidance of spiritual beings.
                </p>
                </div>
                <NavigationTwo link='/view-guidebook' />
            </div>
           
        </>
    );
}

export default GuideBookCard;
