import React from 'react';

//stateless funciton yo
const About = props => {
  return(
    <div>
      <h1 className="text-center page-title"> About</h1>
      <p>This is a weather app build on React, It is fast and super simple to use.</p>
      <p>This are some tools I used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org/">OpenWeatherMap</a> - I used this API to search by city name.
        </li>
      </ul>
    </div>
  )
}

export default About;
