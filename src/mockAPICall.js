import * as Enums from './enums';

export function getTodaysWeather(city) {
  var weather = {
    updateTime : new Date(),
    windDegree : 202,
    windSpeed : 22,
    visibility : 10,
    condition : Enums.skyCondition.SUNNY,
    temperature : 15,
    dewPoint : 13,
    qnh : 1007,
    feelLike : 15,
    humidity : 0.88,
  };
  return weather;
}

export function getTodaysCondition(city) {
  return Enums.skyCondition.SUNNY;
}
