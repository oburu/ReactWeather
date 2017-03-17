import React, {Component} from 'react';

class WeatherForm extends Component{
  constructor() {
    super();

    this.onFormSubmit = this.onFormSubmit.bind(this);//this have to be here, otherwise its unlinked from the whole class
  }

  onFormSubmit(e){
    e.preventDefault()
    var location = this.refs.location.value

    if (location.length > 0){
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm;
