import * as Enums from './enums';

export function getBackgroundImageBySkyCondition(condition) {
  let backgroundImg;
  switch(condition) {
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
  return backgroundImg;
}

export function formatDateTime(dateTime) {
  return dateTime.getHours() + ':' + dateTime.getMinutes() + ' ' +
  dateTime.getDate() + '/' + dateTime.getMonth() + '/' + dateTime.getFullYear();
}
