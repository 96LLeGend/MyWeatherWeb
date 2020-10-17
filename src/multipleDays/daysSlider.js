import React from 'react';
import * as WeatherClient from '../mockAPICall';
import * as Helper from '../helper';
import './daysSlider.css';

class DayCard extends React.Component {

  render() {
    const weather = this.props.weather;
    return (
      <div class = 'sliderCard'>
        <div class ='sliderCardGridContainer'>
          <div style = {{fontSize : 20,}}>{Helper.convertDayFromNumberToWord(weather.datetime.getDay())} {weather.datetime.getDate()}</div>
          <svg height="40" width = "40" viewBox="0 0 30 30">
            <path d={Helper.getConditionIcon(weather.condition)}/>
          </svg>
          <div><span style = {{fontSize : 25, marginRight : 10}}>{weather.high}{'\u00b0'}</span><span>{weather.low}{'\u00b0'}</span></div>
          <div style = {{fontSize : 13,}}>{weather.condition}</div>
        </div>
      </div>
    );
  }
}

class Slider extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        city : 'Auckland',
        weathers : WeatherClient.getWeeklyWeather(this.city),
      };
  }

  render() {
    return (
      <div class = 'slider'>
        <DayCard weather = {this.state.weathers[0]}/>
        <DayCard weather = {this.state.weathers[1]}/>
        <DayCard weather = {this.state.weathers[2]}/>
        <DayCard weather = {this.state.weathers[3]}/>
        <DayCard weather = {this.state.weathers[4]}/>
        <DayCard weather = {this.state.weathers[5]}/>
        <DayCard weather = {this.state.weathers[6]}/>
      </div>
    );
  }
}

export default Slider;
