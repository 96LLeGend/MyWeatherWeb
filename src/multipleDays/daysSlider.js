import React from 'react';
import * as WeatherClient from '../mockAPICall';
import * as Helper from '../helper';
import './daysSlider.css';

class DayCard extends React.Component {

  addTriangle() {
    //console.log('triangle');
    if(this.props.isSelected){
        return <div class="triangle-down"/>;
    }
    return <div />
  }

  changeBackGroundColour(){
    console.log('background');
    if(this.props.isSelected){
        return {backgroundColor : 'rgba(255, 255, 255, 0.9)',};
    }
    return {backgroundColor : 'rgba(255, 255, 255, 0)',};
  }

  render() {
    const weather = this.props.weather;
    return (
      <div>
        <div class = 'sliderCard' style = {this.changeBackGroundColour()}>
          <div class ='sliderCardGridContainer'>
            <div style = {{fontSize : 20,}}>{Helper.convertDayFromNumberToWord(weather.datetime.getDay())} {weather.datetime.getDate()}</div>
            <svg height="40" width = "40" viewBox="0 0 30 30">
              <path d={Helper.getConditionIcon(weather.condition)}/>
            </svg>
            <div><span style = {{fontSize : 25, marginRight : 10}}>{weather.high}{'\u00b0'}</span><span>{weather.low}{'\u00b0'}</span></div>
            <div style = {{fontSize : 13,}}>{weather.condition}</div>
          </div>
        </div>
        {this.addTriangle()}
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
        SelectedIndex : 0,
      };
  }

  handleSelect(i){
    this.setState({SelectedIndex : i});
    //console.log('Selected ' + this.state.SelectedIndex);
  }

  render() {
    return (
      <div class = 'slider'>
        <div class = 'sliderCardContainer' onClick = {() => this.handleSelect(0)}>
          <DayCard weather = {this.state.weathers[0]} isSelected = {this.state.SelectedIndex === 0}/>
        </div>
        <div class = 'sliderCardContainer' onClick = {() => this.handleSelect(1)}>
          <DayCard weather = {this.state.weathers[1]} isSelected = {this.state.SelectedIndex === 1}/>
        </div>
        <div class = 'sliderCardContainer' onClick = {() => this.handleSelect(2)}>
          <DayCard weather = {this.state.weathers[2]} isSelected = {this.state.SelectedIndex === 2}/>
        </div>
        <div class = 'sliderCardContainer' onClick = {() => this.handleSelect(3)}>
          <DayCard weather = {this.state.weathers[3]} isSelected = {this.state.SelectedIndex === 3}/>
        </div>
        <div class = 'sliderCardContainer' onClick = {() => this.handleSelect(4)}>
          <DayCard weather = {this.state.weathers[4]} isSelected = {this.state.SelectedIndex === 4}/>
        </div>
        <div class = 'sliderCardContainer' onClick = {() => this.handleSelect(5)}>
          <DayCard weather = {this.state.weathers[5]} isSelected = {this.state.SelectedIndex === 5}/>
        </div>
        <div class = 'sliderCardContainer' onClick = {() => this.handleSelect(6)}>
          <DayCard weather = {this.state.weathers[6]} isSelected = {this.state.SelectedIndex === 6}/>
        </div>
      </div>
    );
  }
}

export default Slider;
