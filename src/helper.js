import * as Enums from './enums';
import * as SVG from './svgProvider'

export function getBackgroundImageBySkyCondition(condition) {
  let backgroundImg;
  switch(condition) {
    case Enums.skyCondition.CLEAR:
      backgroundImg = '../assets/backgrounds/SunnyBackground.jpg';
      break;
    case Enums.skyCondition.PATRIALCLOUDY:
    case Enums.skyCondition.CLOUD:
      backgroundImg = '../assets/backgrounds/CloudyBackground.jpg';
      break;
    case Enums.skyCondition.FOG:
      backgroundImg = '../assets/backgrounds/FoggyBackground.jpg';
      break;
    case Enums.skyCondition.CLEARSHOWER:
    case Enums.skyCondition.SHOWER:
      backgroundImg = '../assets/backgrounds/RainyBackground.jpeg';
      break;
    case Enums.skyCondition.THUNDERSTORM:
      backgroundImg = '../assets/backgrounds/ThunderstormBackground.jpg';
      break;
    default:
      backgroundImg = '../assets/backgrounds/SnowyBackground.jpg';
      break;
  }
  return backgroundImg;
}

export function formatDateTime(dateTime) {
  return dateTime.getHours() + ':' + dateTime.getMinutes() + ' ' +
  dateTime.getDate() + '/' + dateTime.getMonth() + '/' + dateTime.getFullYear();
}

export function getConditionIcon(condition) {
  const currentTime = new Date().getHours();
  const isDayTime = currentTime > 6 && currentTime < 20;
  switch(condition) {
    case Enums.skyCondition.CLEAR:
      if(isDayTime){
        return SVG.daySunny;
      } else{
        return SVG.nightClear;
      }
    case Enums.skyCondition.PATRIALCLOUDY:
      if(isDayTime){
        return SVG.dayCloudy;
      } else{
        return SVG.nightCloudy;
      }
    case Enums.skyCondition.CLOUD:
      return SVG.cloudy;
    case Enums.skyCondition.FOGG:
      return SVG.fog;
    case Enums.skyCondition.CLEARSHOWER:
      if(isDayTime){
        return SVG.dayShowers;
      } else{
        return SVG.nightShowers;
      }
    case Enums.skyCondition.SHOWER:
      return SVG.rain;
    case Enums.skyCondition.THUNDERSTORM:
      return SVG.thunderstorm;
    default:
      return SVG.snow;
  }
}
