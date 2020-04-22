import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonsDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const displayText =
    season === 'winter' ? "Brrr, it's chilly" : "Let's hit the beach";

  return <h1>{displayText}</h1>;
};

export default SeasonsDisplay;
