import React from 'react';
import Weather from './components/weather.component';
import './App.css';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_key = "0b0db600d8c045daa41230456202811";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      localTime: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      fahrenheit: undefined,
      humidity: undefined,
      feelsLikeCelsius: undefined,
      feelsLikeFahrenheit: undefined,
      error: false
    };
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_key}&q=London`);
    const response = await api_call.json();
    const weather = await response.current;
    const location = await response.location;
    console.log(weather);
    console.log(location);
    this.setState({
      city: location.name,
      country: location.country,
      localTime: location.localtime,
      celsius: weather.temp_c,
      feelsLikeCelsius: weather.feelslike_c,
      feelsLikeFahrenheit: weather.feelslike_f,
      fahrenheit: weather.temp_f,
      humidity: weather.humidity
    })

  };

  state = {};
  render () {
    return (
      <div className="App">
        <Weather city = {this.state.city} 
        country = {this.state.country} 
        localTime = {this.state.localTime}
        celsius = {this.state.celsius}
        fahrenheit = {this.state.fahrenheit}
        feelsLikeCelsius = {this.state.feelsLikeCelsius}
        feelsLikeFahrenheit = {this.state.feelsLikeFahrenheit}
        humidity = {this.state.humidity}/>
      </div>
    );
  }
}


export default App;
