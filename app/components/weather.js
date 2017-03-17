import React, {Component} from 'react';
import WeatherForm from './weather_form';
import WeatherMessage from './weather_message';
import {getTemp} from '../api/openWeatherMap';

class Weather extends Component{
  constructor(){
    super();

    this.handleSearch = this.handleSearch.bind(this)

    //this are my defaults
    this.state = {
      isLoading : false
    }
  }

  handleSearch(location){
    var that = this;
    this.setState({isLoading : true})

    getTemp(location).then( data => {
      that.setState({
        location: location,
        temp: data.main.temp,
        description: data.weather[0].description,
        image: 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png',
        isLoading:false
      })
    }, err =>{
      that.setState({isLoading:false})
      alert(err)
    })
  }

  render(){
    var {isLoading, location, temp, description, image} = this.state;//ES6 destructuring

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather... </h3>
      }else if (temp && location){
        return <WeatherMessage location={location} temp={temp} description={description} image={image}/>
      }
    }

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
}

export default Weather;
