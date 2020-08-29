import React from 'react';
import ReactDOM from 'react-dom';
import TodaysCard from './today/todaysCard';
import * as Enums from './enums';
import * as WeatherClient from './mockAPICall';
import * as Helper from './helper';
import './index.css';


class WeatherApp extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        todaysCondition : WeatherClient.getTodaysCondition('aaa'),
      };
  }

  render() {
    var background = {
      backgroundImage: `url(${Helper.getBackgroundImageBySkyCondition(this.state.todaysCondition)})`
    } ;

    return (
      <div class ='background' style={background}>
        <div class ='panel'>
          <TodaysCard />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('root')
);
