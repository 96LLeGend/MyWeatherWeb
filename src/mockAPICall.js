import * as Enums from './enums';

export function getTodaysWeather(city) {
  var weather = {
    updateTime : new Date(),
    windDegree : 92,
    windSpeed : 22,
    visibility : 10,
    condition : Enums.skyCondition.CLEAR,
    temperature : 15,
    dewPoint : 13,
    qnh : 1007,
    feelLike : 15,
    humidity : 0.88,
  };
  return weather;
}

export function getTodaysCondition(city) {
  return Enums.skyCondition.CLEAR;
}
