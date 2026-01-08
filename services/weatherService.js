const axios = require("axios");
exports.getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};
