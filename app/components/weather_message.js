import React from 'react';

// more stateless component and es6 deconstructor :)
const WeatherMessage = ({temp, location, description, image}) => {
  return(
    <div className="text-center">
      <h4>{location}.</h4>
      <h1>{temp}°<img src={image} /></h1>
      <p className="capitalize">{description}</p>
    </div>
  )
}

export default WeatherMessage;
