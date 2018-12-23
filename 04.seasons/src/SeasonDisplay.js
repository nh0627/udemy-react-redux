import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }

};

// Determine season responding to user's latitude
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    } else {
      return lat > 0 ? 'winter' : 'summer';
    }
  };

// SeasonDisplay component shows different text/icons based on props
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left icon massive`} />
            <h1>{ text }</h1>
            <i className={`${iconName} icon-right icon massive`} />
        </div>
    );
};

export default SeasonDisplay;