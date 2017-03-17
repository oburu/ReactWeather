import React from 'react';

// more stateless component and es6 deconstructor :)
const WeatherMessage = ({temp, location, description, image}) => {
  return(
    <div>
      <h2>{location}.</h2>
      <p>{temp}°<img src={image} /></p>
      <p>{description}</p>
    </div>
  )
}

export default WeatherMessage;
