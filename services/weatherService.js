const axios = require("axios");

exports.getWeather = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url, { timeout: 10000 });
    return response.data;
  } catch (error) {
    if (error.response) {
      // API returned an error
      throw new Error(error.response.data.message || "Weather API error");
    }
    throw new Error("Failed to connect to weather service");
  }
};
