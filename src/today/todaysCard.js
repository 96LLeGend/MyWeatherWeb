import React from 'react';
import * as WeatherClient from '../mockAPICall';
import * as Helper from '../helper';
import './today.css';

class TodaysCard extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        city : 'Auckland',
        weatherInfo : WeatherClient.getTodaysWeather(this.city),
      };
  }

  render() {
    const windDirectionIconStyle = {
      width: 15,
      height: 15,
      background: "url(../assets/icons/wi-wind-deg.svg)",
      transform: 'rotate('+this.state.weatherInfo.windDegree+'deg)',
    };

    return (
      <div class ='card'>
        <div class = 'cityName'>{this.state.city}</div>
        <div class = 'mainInfoSection'>
          <div class = 'conditionIcon'>
            <svg height="65" width = "65" viewBox="0 0 30 30">
              <path d={Helper.getConditionIcon(this.state.weatherInfo.condition)}/>
            </svg>
          </div>
          <div class = 'temperatureNumber'>{this.state.weatherInfo.temperature}</div>
          <div class = 'degreeSymbol'>{'\u00b0'}</div>
          <div class = 'temperatureUnit'>{'C'}</div>
        </div>
        <div class = 'conditionLabel'>{this.state.weatherInfo.condition}</div>
        <div class = 'updateTime'>Updated as of {Helper.formatDateTime(this.state.weatherInfo.updateTime)}</div>
        <div>
          <div class = 'extraInfo'>
            <span>Feels Like {this.state.weatherInfo.feelLike}{'\u00b0'}</span>
          <span>Wind <div class = 'windDirectionIconContainer'><div style={windDirectionIconStyle}/></div> {this.state.weatherInfo.windSpeed} km/h </span>
            <span>Visibility {this.state.weatherInfo.visibility} km</span>
          </div>
          <div class = 'extraInfo'>
            <span>Barometer {this.state.weatherInfo.qnh} mb</span>
            <span>Humidity {(this.state.weatherInfo.humidity)*100}%</span>
            <span>Dew Point {this.state.weatherInfo.dewPoint}{'\u00b0'}</span>
          </div>
        </div>

      </div>
    );
  }
}

export default TodaysCard;
