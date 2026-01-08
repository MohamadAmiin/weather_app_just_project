const { getWeather } = require("../services/weatherService");

exports.fetchWeather = async (req, res) => {
  try {
    const { city } = req.query;

    // Check if city is provided
    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }

    const data = await getWeather(city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data", error: error.message });
  }
};
