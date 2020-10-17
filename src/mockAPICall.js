import * as Enums from './enums';

export function getTodaysWeather(city) {
  var weather = {
    updateTime : new Date(),
    windDegree : 92,
    windSpeed : 22,
    visibility : 10,
    condition : Enums.skyCondition.PARTIALCLOUDY,
    temperature : 15,
    dewPoint : 13,
    qnh : 1007,
    feelLike : 15,
    humidity : 0.88,
  };
  return weather;
}

export function getTodaysCondition(city) {
  return Enums.skyCondition.PARTIALCLOUDY;
}

export function getWeeklyWeather(city) {

  const oneDayInMilisecond = 24 * 60 * 60 * 1000

  var day1 = {
    datetime : new Date(),
    condition : Enums.skyCondition.PARTIALCLOUDY,
    high : 16,
    low : 8,
  };

  var day2 = {
    datetime : new Date(day1.datetime.getTime() + oneDayInMilisecond),
    condition : Enums.skyCondition.PARTIALCLOUDY,
    high : 16,
    low : 14,
  };

  var day3 = {
    datetime : new Date(day2.datetime.getTime() + oneDayInMilisecond),
    condition : Enums.skyCondition.CLEARSHOWER,
    high : 19,
    low : 15,
  };

  var day4 = {
    datetime : new Date(day3.datetime.getTime() + oneDayInMilisecond),
    condition : Enums.skyCondition.SHOWER,
    high : 18,
    low : 13,
  };

  var day5 = {
    datetime : new Date(day4.datetime.getTime() + oneDayInMilisecond),
    condition : Enums.skyCondition.CLOUD,
    high : 19,
    low : 14,
  };

  var day6 = {
    datetime : new Date(day5.datetime.getTime() + oneDayInMilisecond),
    condition : Enums.skyCondition.CLOUD,
    high : 18,
    low : 12,
  };

  var day7 = {
    datetime : new Date(day6.datetime.getTime() + oneDayInMilisecond),
    condition : Enums.skyCondition.CLEAR,
    high : 18,
    low : 13,
  };

  return [day1, day2, day3, day4, day5, day6, day7];
}
