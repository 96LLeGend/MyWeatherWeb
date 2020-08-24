import React from 'react';
import ReactDOM from 'react-dom';
import * as Enums from './enums';
import * as WeatherClient from './mockAPICall';
import './index.css';


class WeatherApp extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        todaysCondition : WeatherClient.getTodaysCondition('aaa'),
      };
  }

  render() {
    let backgroundImg;
    switch(this.state.todaysCondition) {
      case Enums.skyCondition.SUNNY:
        backgroundImg = '../assets/backgrounds/SunnyBackground.jpg';
      break;
      case Enums.skyCondition.PATRIALCLOUDY:
      case Enums.skyCondition.CLOUDY:
        backgroundImg = '../assets/backgrounds/CloudyBackground.jpg';
      break;
      case Enums.skyCondition.FOGGY:
        backgroundImg = '../assets/backgrounds/FoggyBackground.jpg';
      break;
      case Enums.skyCondition.SUNNYLIGHTRAIN:
      case Enums.skyCondition.CLOUDYLIGHTRAIN:
      case Enums.skyCondition.LIGHTRAIN:
        backgroundImg = '../assets/backgrounds/RainyBackground.jpeg';
      break;
      default:
        backgroundImg = '../assets/backgrounds/ThunderstormBackground.jpg';
      break;
    }

    var backgroundStyle = {
      backgroundImage: `url(${backgroundImg})`
    };

    return (
      <div class ='background' style={backgroundStyle}>
        <div class ='panel'>hello</div>
      </div>
    );
  }
}

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('root')
);
