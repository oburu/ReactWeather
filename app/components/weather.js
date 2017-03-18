import React, {Component} from 'react';
import WeatherForm from './weather_form';
import WeatherMessage from './weather_message';
import ErrorModal from './error_modal';
import axios from 'axios';

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

    this.setState({
      isLoading : true,
      errorMessage : undefined,
      temp: undefined,
      image:undefined,
      location: undefined,
      description: undefined
    })

    const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dc9ac33e49fb812dcc4b4f89e23f2576&units=metric';

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //here is were the request is made
    axios.get(requestUrl)
    .then(function (res) {
      that.setState({
        location: res.data.name,
        temp: res.data.main.temp,
        description:res.data.weather[0].description,
        image:`http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
        isLoading: false
      });
    })
    .catch(function (error) {
      that.setState({
        isLoading: false,
        errorMessage: error.response.data.message
      });
    });
  }

  componentDidMount(){
    var location = this.props.location.query.loc;

    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(newProps){
    var location = newProps.location.query.loc;

    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  render(){
    var {isLoading, location, temp, description, image, errorMessage} = this.state;//ES6 destructuring

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather... </h3>
      }else if (temp && location){
        return <WeatherMessage location={location} temp={temp} description={description} image={image}/>
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return <ErrorModal message={errorMessage}/>
      }
    }

    return(
      <div>
        <h1 className="page-title text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

export default Weather;
