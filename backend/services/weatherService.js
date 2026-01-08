const https = require("https");

exports.getWeather = (city) => {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    https.get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.cod !== 200) {
            reject(new Error(parsed.message || "City not found"));
          } else {
            resolve(parsed);
          }
        } catch (e) {
          reject(new Error("Failed to parse weather data"));
        }
      });
    }).on("error", (err) => {
      reject(new Error("Failed to fetch weather data: " + err.message));
    });
  });
};
