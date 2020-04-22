import React from 'react';

const seasonConfig = {
  summer: {
    displayText: "Let's hit the beach",
    iconName: 'sun',
  },
  winter: {
    displayText: "Brrr, it's chilly",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonsDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { displayText, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{displayText}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonsDisplay;
