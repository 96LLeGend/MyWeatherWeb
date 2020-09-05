import React from 'react';
import * as WeatherClient from '../mockAPICall';
import * as Helper from '../helper';
import './today.css';

class todaysCard extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        city : 'Auckland',
        weatherInfo : WeatherClient.getTodaysWeather(this.city),
      };
  }

  render() {
    return (
      <div class ='card'>
        <div class = 'cityName'>{this.state.city}</div>
      <div class = 'mainInfoSection'>
          <div class = 'conditionIcon'></div>
          <div class = 'temperatureNumber'>{this.state.weatherInfo.temperature}</div>
          <div  class = 'degreeSymbol'>{'\u00b0'}</div>
          <div class = 'temperatureUnit'>{'C'}</div>
        </div>
        <div>{Helper.formatDateTime(this.state.weatherInfo.updateTime)}</div>
        <div>{this.state.weatherInfo.windDegree}</div>
        <div>{this.state.weatherInfo.windSpeed}</div>
        <div>{this.state.weatherInfo.visibility}</div>
        <div>{this.state.weatherInfo.condition}</div>
        <div>{this.state.weatherInfo.dewPoint}</div>
        <div>{this.state.weatherInfo.qnh}</div>
        <div>{this.state.weatherInfo.feelLike}</div>
        <div>{this.state.weatherInfo.humidity}</div>
      </div>
    );
  }
}

export default todaysCard;
