import { useState } from 'react';

function Dashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/weather?city=${city}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch weather');
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="search-section">
        <h1>Weather Dashboard</h1>
        <form className="search-box" onSubmit={searchWeather}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {error && (
        <div className="form-container" style={{ textAlign: 'center' }}>
          <div className="error-message">{error}</div>
        </div>
      )}

      {loading && <div className="loading">Loading weather data...</div>}

      {weather && (
        <div className="weather-card">
          <h2 className="city-name">{weather.name}</h2>
          <p className="country">{weather.sys?.country}</p>

          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@4x.png`}
            alt={weather.weather[0]?.description}
          />

          <div className="temperature">{Math.round(weather.main?.temp)}°C</div>
          <p className="description">{weather.weather[0]?.description}</p>

          <div className="weather-details">
            <div className="weather-detail">
              <div className="label">Feels Like</div>
              <div className="value">{Math.round(weather.main?.feels_like)}°C</div>
            </div>
            <div className="weather-detail">
              <div className="label">Humidity</div>
              <div className="value">{weather.main?.humidity}%</div>
            </div>
            <div className="weather-detail">
              <div className="label">Wind</div>
              <div className="value">{weather.wind?.speed} m/s</div>
            </div>
          </div>
        </div>
      )}

      {!weather && !loading && !error && (
        <div className="no-data">
          <h2>Search for a City</h2>
          <p>Enter a city name to see the current weather</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
