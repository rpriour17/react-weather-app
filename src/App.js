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

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet", 
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Foggy: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  getWeatherIcon(codes) {
    switch(true) {
      case codes < 1010:
        this.setState({icon: this.weatherIcon.Clear})
        break;
      case codes >= 1150 && codes <= 1195:
        this.setState({icon: this.weatherIcon.Rain})
        break;
      case codes >= 1273:
        this.setState({icon: this.weatherIcon.Thunderstorm})
        break;
      case codes >= 1220 && codes <= 1264:
        this.setState({icon: this.weatherIcon.Snow})
        break;
      case codes === 1135:
        this.setState({icon: this.weatherIcon.Foggy})
        break;
      case codes === 1030:
        this.setState({icon: this.weatherIcon.Mist})
        break;
      default:
        this.setState({icon: this.weatherIcon.Clear})
    }
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
    this.getWeatherIcon(weather.condition.code);
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
        humidity = {this.state.humidity}
        weatherIcon = {this.state.icon}/>
      </div>
    );
  }
}


export default App;
