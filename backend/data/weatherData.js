// Demo weather data for 100 cities
const weatherData = {
  // Africa
  mogadishu: {
    name: "Mogadishu",
    sys: { country: "SO" },
    main: { temp: 32, feels_like: 35, humidity: 70, pressure: 1010 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 6.8 },
    visibility: 10000
  },
  cairo: {
    name: "Cairo",
    sys: { country: "EG" },
    main: { temp: 25, feels_like: 24, humidity: 40, pressure: 1014 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.8 },
    visibility: 10000
  },
  nairobi: {
    name: "Nairobi",
    sys: { country: "KE" },
    main: { temp: 22, feels_like: 21, humidity: 55, pressure: 1016 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 3.2 },
    visibility: 10000
  },
  lagos: {
    name: "Lagos",
    sys: { country: "NG" },
    main: { temp: 30, feels_like: 33, humidity: 75, pressure: 1012 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  johannesburg: {
    name: "Johannesburg",
    sys: { country: "ZA" },
    main: { temp: 20, feels_like: 19, humidity: 45, pressure: 1018 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.0 },
    visibility: 10000
  },
  casablanca: {
    name: "Casablanca",
    sys: { country: "MA" },
    main: { temp: 18, feels_like: 17, humidity: 65, pressure: 1015 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 4.2 },
    visibility: 10000
  },
  accra: {
    name: "Accra",
    sys: { country: "GH" },
    main: { temp: 29, feels_like: 32, humidity: 78, pressure: 1011 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 5.0 },
    visibility: 10000
  },
  addis: {
    name: "Addis Ababa",
    sys: { country: "ET" },
    main: { temp: 18, feels_like: 17, humidity: 50, pressure: 1020 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 2.5 },
    visibility: 10000
  },
  tunis: {
    name: "Tunis",
    sys: { country: "TN" },
    main: { temp: 20, feels_like: 19, humidity: 55, pressure: 1016 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  algiers: {
    name: "Algiers",
    sys: { country: "DZ" },
    main: { temp: 19, feels_like: 18, humidity: 60, pressure: 1017 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  dakar: {
    name: "Dakar",
    sys: { country: "SN" },
    main: { temp: 26, feels_like: 28, humidity: 70, pressure: 1013 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 5.5 },
    visibility: 10000
  },
  kampala: {
    name: "Kampala",
    sys: { country: "UG" },
    main: { temp: 24, feels_like: 25, humidity: 65, pressure: 1015 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 2.8 },
    visibility: 10000
  },
  harare: {
    name: "Harare",
    sys: { country: "ZW" },
    main: { temp: 21, feels_like: 20, humidity: 50, pressure: 1018 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.2 },
    visibility: 10000
  },

  // Europe
  london: {
    name: "London",
    sys: { country: "GB" },
    main: { temp: 12, feels_like: 10, humidity: 75, pressure: 1015 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 5.2 },
    visibility: 10000
  },
  paris: {
    name: "Paris",
    sys: { country: "FR" },
    main: { temp: 15, feels_like: 14, humidity: 65, pressure: 1018 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  berlin: {
    name: "Berlin",
    sys: { country: "DE" },
    main: { temp: 10, feels_like: 8, humidity: 70, pressure: 1020 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  madrid: {
    name: "Madrid",
    sys: { country: "ES" },
    main: { temp: 18, feels_like: 17, humidity: 50, pressure: 1016 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.0 },
    visibility: 10000
  },
  rome: {
    name: "Rome",
    sys: { country: "IT" },
    main: { temp: 17, feels_like: 16, humidity: 55, pressure: 1017 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 2.8 },
    visibility: 10000
  },
  amsterdam: {
    name: "Amsterdam",
    sys: { country: "NL" },
    main: { temp: 11, feels_like: 9, humidity: 80, pressure: 1014 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 5.5 },
    visibility: 8000
  },
  vienna: {
    name: "Vienna",
    sys: { country: "AT" },
    main: { temp: 12, feels_like: 10, humidity: 65, pressure: 1019 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 3.2 },
    visibility: 10000
  },
  brussels: {
    name: "Brussels",
    sys: { country: "BE" },
    main: { temp: 13, feels_like: 11, humidity: 72, pressure: 1015 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  lisbon: {
    name: "Lisbon",
    sys: { country: "PT" },
    main: { temp: 19, feels_like: 18, humidity: 60, pressure: 1016 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  athens: {
    name: "Athens",
    sys: { country: "GR" },
    main: { temp: 20, feels_like: 19, humidity: 55, pressure: 1015 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.8 },
    visibility: 10000
  },
  dublin: {
    name: "Dublin",
    sys: { country: "IE" },
    main: { temp: 10, feels_like: 8, humidity: 82, pressure: 1012 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 6.0 },
    visibility: 7000
  },
  stockholm: {
    name: "Stockholm",
    sys: { country: "SE" },
    main: { temp: 6, feels_like: 3, humidity: 70, pressure: 1022 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 4.2 },
    visibility: 10000
  },
  oslo: {
    name: "Oslo",
    sys: { country: "NO" },
    main: { temp: 4, feels_like: 1, humidity: 68, pressure: 1024 },
    weather: [{ id: 600, main: "Snow", description: "light snow", icon: "13d" }],
    wind: { speed: 3.5 },
    visibility: 8000
  },
  copenhagen: {
    name: "Copenhagen",
    sys: { country: "DK" },
    main: { temp: 8, feels_like: 5, humidity: 75, pressure: 1018 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 5.0 },
    visibility: 10000
  },
  warsaw: {
    name: "Warsaw",
    sys: { country: "PL" },
    main: { temp: 9, feels_like: 6, humidity: 65, pressure: 1021 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  prague: {
    name: "Prague",
    sys: { country: "CZ" },
    main: { temp: 11, feels_like: 9, humidity: 60, pressure: 1020 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 3.0 },
    visibility: 10000
  },
  budapest: {
    name: "Budapest",
    sys: { country: "HU" },
    main: { temp: 13, feels_like: 11, humidity: 58, pressure: 1018 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 2.5 },
    visibility: 10000
  },
  moscow: {
    name: "Moscow",
    sys: { country: "RU" },
    main: { temp: 2, feels_like: -2, humidity: 75, pressure: 1025 },
    weather: [{ id: 600, main: "Snow", description: "light snow", icon: "13d" }],
    wind: { speed: 4.5 },
    visibility: 6000
  },
  zurich: {
    name: "Zurich",
    sys: { country: "CH" },
    main: { temp: 10, feels_like: 8, humidity: 62, pressure: 1019 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 2.8 },
    visibility: 10000
  },
  barcelona: {
    name: "Barcelona",
    sys: { country: "ES" },
    main: { temp: 18, feels_like: 17, humidity: 58, pressure: 1015 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  munich: {
    name: "Munich",
    sys: { country: "DE" },
    main: { temp: 11, feels_like: 9, humidity: 65, pressure: 1018 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 3.2 },
    visibility: 10000
  },
  milan: {
    name: "Milan",
    sys: { country: "IT" },
    main: { temp: 14, feels_like: 13, humidity: 60, pressure: 1016 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 2.5 },
    visibility: 10000
  },

  // Asia
  tokyo: {
    name: "Tokyo",
    sys: { country: "JP" },
    main: { temp: 18, feels_like: 17, humidity: 60, pressure: 1012 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 4.1 },
    visibility: 10000
  },
  beijing: {
    name: "Beijing",
    sys: { country: "CN" },
    main: { temp: 10, feels_like: 8, humidity: 50, pressure: 1022 },
    weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }],
    wind: { speed: 2.5 },
    visibility: 5000
  },
  dubai: {
    name: "Dubai",
    sys: { country: "AE" },
    main: { temp: 28, feels_like: 30, humidity: 45, pressure: 1008 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  singapore: {
    name: "Singapore",
    sys: { country: "SG" },
    main: { temp: 30, feels_like: 34, humidity: 80, pressure: 1010 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  bangkok: {
    name: "Bangkok",
    sys: { country: "TH" },
    main: { temp: 32, feels_like: 38, humidity: 75, pressure: 1008 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 2.8 },
    visibility: 10000
  },
  seoul: {
    name: "Seoul",
    sys: { country: "KR" },
    main: { temp: 14, feels_like: 12, humidity: 55, pressure: 1018 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  mumbai: {
    name: "Mumbai",
    sys: { country: "IN" },
    main: { temp: 30, feels_like: 33, humidity: 70, pressure: 1012 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  delhi: {
    name: "Delhi",
    sys: { country: "IN" },
    main: { temp: 28, feels_like: 30, humidity: 55, pressure: 1014 },
    weather: [{ id: 721, main: "Haze", description: "haze", icon: "50d" }],
    wind: { speed: 3.0 },
    visibility: 4000
  },
  shanghai: {
    name: "Shanghai",
    sys: { country: "CN" },
    main: { temp: 16, feels_like: 15, humidity: 65, pressure: 1016 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  "hong kong": {
    name: "Hong Kong",
    sys: { country: "HK" },
    main: { temp: 24, feels_like: 25, humidity: 72, pressure: 1014 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 5.0 },
    visibility: 10000
  },
  jakarta: {
    name: "Jakarta",
    sys: { country: "ID" },
    main: { temp: 31, feels_like: 35, humidity: 78, pressure: 1009 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 3.2 },
    visibility: 8000
  },
  manila: {
    name: "Manila",
    sys: { country: "PH" },
    main: { temp: 32, feels_like: 36, humidity: 72, pressure: 1010 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  "kuala lumpur": {
    name: "Kuala Lumpur",
    sys: { country: "MY" },
    main: { temp: 31, feels_like: 35, humidity: 75, pressure: 1011 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 2.5 },
    visibility: 10000
  },
  hanoi: {
    name: "Hanoi",
    sys: { country: "VN" },
    main: { temp: 26, feels_like: 28, humidity: 70, pressure: 1012 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 3.0 },
    visibility: 10000
  },
  tehran: {
    name: "Tehran",
    sys: { country: "IR" },
    main: { temp: 15, feels_like: 13, humidity: 45, pressure: 1020 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  riyadh: {
    name: "Riyadh",
    sys: { country: "SA" },
    main: { temp: 30, feels_like: 29, humidity: 25, pressure: 1012 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  istanbul: {
    name: "Istanbul",
    sys: { country: "TR" },
    main: { temp: 16, feels_like: 15, humidity: 60, pressure: 1016 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  karachi: {
    name: "Karachi",
    sys: { country: "PK" },
    main: { temp: 28, feels_like: 30, humidity: 60, pressure: 1014 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 5.5 },
    visibility: 10000
  },
  dhaka: {
    name: "Dhaka",
    sys: { country: "BD" },
    main: { temp: 29, feels_like: 33, humidity: 72, pressure: 1010 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 3.0 },
    visibility: 8000
  },
  taipei: {
    name: "Taipei",
    sys: { country: "TW" },
    main: { temp: 22, feels_like: 23, humidity: 70, pressure: 1014 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 3.5 },
    visibility: 9000
  },

  // North America
  "new york": {
    name: "New York",
    sys: { country: "US" },
    main: { temp: 8, feels_like: 5, humidity: 55, pressure: 1020 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 7.2 },
    visibility: 8000
  },
  "los angeles": {
    name: "Los Angeles",
    sys: { country: "US" },
    main: { temp: 22, feels_like: 21, humidity: 50, pressure: 1015 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  chicago: {
    name: "Chicago",
    sys: { country: "US" },
    main: { temp: 6, feels_like: 2, humidity: 60, pressure: 1022 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 8.0 },
    visibility: 10000
  },
  houston: {
    name: "Houston",
    sys: { country: "US" },
    main: { temp: 20, feels_like: 19, humidity: 65, pressure: 1016 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 5.0 },
    visibility: 10000
  },
  miami: {
    name: "Miami",
    sys: { country: "US" },
    main: { temp: 26, feels_like: 28, humidity: 75, pressure: 1012 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 5.5 },
    visibility: 10000
  },
  toronto: {
    name: "Toronto",
    sys: { country: "CA" },
    main: { temp: 5, feels_like: 1, humidity: 65, pressure: 1024 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 6.0 },
    visibility: 10000
  },
  vancouver: {
    name: "Vancouver",
    sys: { country: "CA" },
    main: { temp: 10, feels_like: 8, humidity: 78, pressure: 1016 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 4.5 },
    visibility: 8000
  },
  "mexico city": {
    name: "Mexico City",
    sys: { country: "MX" },
    main: { temp: 20, feels_like: 19, humidity: 50, pressure: 1018 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 3.0 },
    visibility: 10000
  },
  montreal: {
    name: "Montreal",
    sys: { country: "CA" },
    main: { temp: 3, feels_like: -1, humidity: 70, pressure: 1025 },
    weather: [{ id: 600, main: "Snow", description: "light snow", icon: "13d" }],
    wind: { speed: 5.5 },
    visibility: 7000
  },
  seattle: {
    name: "Seattle",
    sys: { country: "US" },
    main: { temp: 12, feels_like: 10, humidity: 75, pressure: 1014 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 4.0 },
    visibility: 8000
  },
  "san francisco": {
    name: "San Francisco",
    sys: { country: "US" },
    main: { temp: 16, feels_like: 15, humidity: 70, pressure: 1016 },
    weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }],
    wind: { speed: 5.5 },
    visibility: 6000
  },
  boston: {
    name: "Boston",
    sys: { country: "US" },
    main: { temp: 7, feels_like: 4, humidity: 60, pressure: 1021 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 6.5 },
    visibility: 10000
  },
  denver: {
    name: "Denver",
    sys: { country: "US" },
    main: { temp: 8, feels_like: 5, humidity: 40, pressure: 1020 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  atlanta: {
    name: "Atlanta",
    sys: { country: "US" },
    main: { temp: 16, feels_like: 15, humidity: 55, pressure: 1018 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  phoenix: {
    name: "Phoenix",
    sys: { country: "US" },
    main: { temp: 25, feels_like: 24, humidity: 25, pressure: 1012 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },

  // South America
  "sao paulo": {
    name: "Sao Paulo",
    sys: { country: "BR" },
    main: { temp: 24, feels_like: 25, humidity: 70, pressure: 1014 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  "rio de janeiro": {
    name: "Rio de Janeiro",
    sys: { country: "BR" },
    main: { temp: 28, feels_like: 31, humidity: 75, pressure: 1012 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  "buenos aires": {
    name: "Buenos Aires",
    sys: { country: "AR" },
    main: { temp: 22, feels_like: 22, humidity: 60, pressure: 1016 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 5.0 },
    visibility: 10000
  },
  lima: {
    name: "Lima",
    sys: { country: "PE" },
    main: { temp: 20, feels_like: 20, humidity: 80, pressure: 1014 },
    weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }],
    wind: { speed: 3.0 },
    visibility: 6000
  },
  bogota: {
    name: "Bogota",
    sys: { country: "CO" },
    main: { temp: 16, feels_like: 15, humidity: 70, pressure: 1020 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 2.5 },
    visibility: 8000
  },
  santiago: {
    name: "Santiago",
    sys: { country: "CL" },
    main: { temp: 18, feels_like: 17, humidity: 55, pressure: 1018 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  caracas: {
    name: "Caracas",
    sys: { country: "VE" },
    main: { temp: 26, feels_like: 27, humidity: 65, pressure: 1012 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 3.0 },
    visibility: 10000
  },
  quito: {
    name: "Quito",
    sys: { country: "EC" },
    main: { temp: 18, feels_like: 17, humidity: 60, pressure: 1022 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 2.0 },
    visibility: 10000
  },

  // Oceania
  sydney: {
    name: "Sydney",
    sys: { country: "AU" },
    main: { temp: 24, feels_like: 25, humidity: 68, pressure: 1011 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 5.5 },
    visibility: 10000
  },
  melbourne: {
    name: "Melbourne",
    sys: { country: "AU" },
    main: { temp: 20, feels_like: 19, humidity: 60, pressure: 1015 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 6.0 },
    visibility: 10000
  },
  brisbane: {
    name: "Brisbane",
    sys: { country: "AU" },
    main: { temp: 26, feels_like: 28, humidity: 70, pressure: 1012 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  auckland: {
    name: "Auckland",
    sys: { country: "NZ" },
    main: { temp: 18, feels_like: 17, humidity: 72, pressure: 1014 },
    weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
    wind: { speed: 5.0 },
    visibility: 9000
  },
  perth: {
    name: "Perth",
    sys: { country: "AU" },
    main: { temp: 28, feels_like: 28, humidity: 45, pressure: 1010 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 5.5 },
    visibility: 10000
  },
  wellington: {
    name: "Wellington",
    sys: { country: "NZ" },
    main: { temp: 15, feels_like: 13, humidity: 75, pressure: 1016 },
    weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
    wind: { speed: 7.0 },
    visibility: 10000
  },

  // Middle East
  jerusalem: {
    name: "Jerusalem",
    sys: { country: "IL" },
    main: { temp: 18, feels_like: 17, humidity: 55, pressure: 1016 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  amman: {
    name: "Amman",
    sys: { country: "JO" },
    main: { temp: 17, feels_like: 16, humidity: 50, pressure: 1018 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 3.0 },
    visibility: 10000
  },
  beirut: {
    name: "Beirut",
    sys: { country: "LB" },
    main: { temp: 20, feels_like: 19, humidity: 65, pressure: 1015 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },
  doha: {
    name: "Doha",
    sys: { country: "QA" },
    main: { temp: 28, feels_like: 30, humidity: 50, pressure: 1010 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 5.0 },
    visibility: 10000
  },
  kuwait: {
    name: "Kuwait City",
    sys: { country: "KW" },
    main: { temp: 26, feels_like: 26, humidity: 40, pressure: 1012 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.5 },
    visibility: 10000
  },
  muscat: {
    name: "Muscat",
    sys: { country: "OM" },
    main: { temp: 28, feels_like: 30, humidity: 55, pressure: 1010 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  },

  // Additional African Cities
  "cape town": {
    name: "Cape Town",
    sys: { country: "ZA" },
    main: { temp: 22, feels_like: 22, humidity: 60, pressure: 1014 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 6.0 },
    visibility: 10000
  },
  marrakech: {
    name: "Marrakech",
    sys: { country: "MA" },
    main: { temp: 24, feels_like: 23, humidity: 40, pressure: 1016 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  kigali: {
    name: "Kigali",
    sys: { country: "RW" },
    main: { temp: 22, feels_like: 22, humidity: 65, pressure: 1018 },
    weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
    wind: { speed: 2.5 },
    visibility: 10000
  },
  lusaka: {
    name: "Lusaka",
    sys: { country: "ZM" },
    main: { temp: 25, feels_like: 25, humidity: 55, pressure: 1015 },
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
    wind: { speed: 3.0 },
    visibility: 10000
  },
  tripoli: {
    name: "Tripoli",
    sys: { country: "LY" },
    main: { temp: 22, feels_like: 21, humidity: 55, pressure: 1016 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 4.0 },
    visibility: 10000
  }
};

module.exports = weatherData;
