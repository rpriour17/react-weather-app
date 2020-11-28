import React from 'react';
import App from '../App';

const Weather = (props) => {
    return(
        <div className= "container">
            <div className="cards">
                <h1>{props.city}, {props.country}</h1>
                <h2>{props.localTime}</h2>
                <h5 className="py-4">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="py2">Current Temp: {props.celsius}&deg;</h1>   
                <h1 className="py2">Feels Like: {props.feelsLikeCelsius}&deg;</h1>             
            </div>
        </div>
    );
};


export default Weather;