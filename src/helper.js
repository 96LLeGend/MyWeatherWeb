import * as Enums from './enums';

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
  let icon;
  const currentTime = new Date().getHours();
  const isDayTime = currentTime > 6 && currentTime < 20;
  switch(condition) {
    case Enums.skyCondition.CLEAR:
      if(isDayTime){
        icon = '../assets/icons/skyCondition/wi-day-sunny.svg';
      } else{
        icon = '../assets/icons/skyCondition/wi-night-clear.svg';
      }
      break;
    case Enums.skyCondition.PATRIALCLOUDY:
      if(isDayTime){
        icon = '../assets/icons/skyCondition/wi-day-cloudy.svg';
      } else{
        icon = '../assets/icons/skyCondition/wi-night-alt-cloudy.svg';
      }
      break;
    case Enums.skyCondition.CLOUD:
      icon = '../assets/icons/skyCondition/wi-cloudy.svg';
      break;
    case Enums.skyCondition.FOGG:
      icon = '../assets/icons/skyCondition/wi-fog.svg';
      break;
    case Enums.skyCondition.CLEARSHOWER:
      if(isDayTime){
        icon = '../assets/icons/skyCondition/wi-day-showers.svg';
      } else{
        icon = '../assets/icons/skyCondition/wi-night-alt-rain-mix.svg';
      }
      break;
    case Enums.skyCondition.SHOWER:
      icon = '../assets/icons/skyCondition/wi-rain-mix.svg';
      break;
    case Enums.skyCondition.THUNDERSTORM:
      icon = '../assets/icons/skyCondition/wi-thunderstorm.svg';
      break;
    default:
      icon = '../assets/icons/skyCondition/wi-snow.svg';
      break;
  }
  return icon;
}
