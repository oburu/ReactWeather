import React from 'react';

// more stateless component and es6 deconstructor :)
const WeatherMessage = ({temp, location, description, image}) => {
  return(
    <div>
      <h2>{location}.</h2>
      <h3>{temp}°<img src={image} /></h3>
      <p>{description}</p>
    </div>
  )
}

export default WeatherMessage;
