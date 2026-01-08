import { useState } from 'react';

function Dashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const quickCities = ['London', 'Paris', 'Tokyo', 'New York', 'Dubai', 'Sydney', 'Mogadishu', 'Cairo'];

  const searchWeather = async (searchCity) => {
    const cityToSearch = searchCity || city;
    if (!cityToSearch.trim()) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/weather?city=${cityToSearch}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch weather');
      }

      setWeather(data);
      setCity(cityToSearch);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWeather();
  };

  const handleQuickCity = (cityName) => {
    searchWeather(cityName);
  };

  const getCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="dashboard">
      <div className="search-section">
        <h1>Check the <span>Weather</span></h1>
        <p>Search for any city to get current weather conditions</p>

        <form className="search-box" onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search for a city..."
          />
          <button type="submit" disabled={loading}>
            {loading ? (
              'Searching...'
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                Search
              </>
            )}
          </button>
        </form>

        <div className="quick-cities">
          {quickCities.map((cityName) => (
            <button
              key={cityName}
              className="quick-city"
              onClick={() => handleQuickCity(cityName)}
            >
              {cityName}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="weather-card" style={{ textAlign: 'center', padding: '40px' }}>
          <div className="error-message">{error}</div>
        </div>
      )}

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Fetching weather data...</p>
        </div>
      )}

      {weather && (
        <div className="weather-card">
          <div className="weather-header">
            <div className="location">
              <h2 className="city-name">{weather.name}</h2>
              <p className="country">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {weather.sys?.country}
              </p>
            </div>
            <div className="date-time">
              <div>{getCurrentDate()}</div>
              <div>{getCurrentTime()}</div>
            </div>
          </div>

          <div className="weather-main">
            <div className="weather-icon-container">
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@4x.png`}
                alt={weather.weather[0]?.description}
              />
            </div>
            <div className="temperature-container">
              <div className="temperature">
                {Math.round(weather.main?.temp)}<sup>°C</sup>
              </div>
              <p className="description">{weather.weather[0]?.description}</p>
              <p className="feels-like">Feels like {Math.round(weather.main?.feels_like)}°C</p>
            </div>
          </div>

          <div className="weather-details">
            <div className="weather-detail">
              <div className="detail-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div className="label">Humidity</div>
              <div className="value">{weather.main?.humidity}<span className="unit">%</span></div>
            </div>
            <div className="weather-detail">
              <div className="detail-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                </svg>
              </div>
              <div className="label">Wind Speed</div>
              <div className="value">{weather.wind?.speed}<span className="unit"> m/s</span></div>
            </div>
            <div className="weather-detail">
              <div className="detail-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="label">Pressure</div>
              <div className="value">{weather.main?.pressure}<span className="unit"> hPa</span></div>
            </div>
          </div>
        </div>
      )}

      {!weather && !loading && !error && (
        <div className="no-data">
          <div className="icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
          <h2>Search for a City</h2>
          <p>Enter a city name above or click on one of the quick city buttons to see current weather conditions</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
