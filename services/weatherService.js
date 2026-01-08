const weatherData = require("../data/weatherData");

exports.getWeather = async (city) => {
  // Convert city to lowercase for matching
  const cityLower = city.toLowerCase().trim();

  // Find weather data for the city
  const data = weatherData[cityLower];

  if (!data) {
    throw new Error("City not found. We have 100 cities available including: London, Paris, New York, Tokyo, Dubai, Mogadishu, Lagos, Cairo, Sydney, and more!");
  }

  return data;
};
