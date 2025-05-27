import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;

    const temps = cityData.list.map(w => w.main.temp - 273.15); // Convert to Celsius
    const pressures = cityData.list.map(w => w.main.pressure);
    const humidities = cityData.list.map(w => w.main.humidity);

    const avg = arr => (arr.reduce((sum, val) => sum + val, 0) / arr.length).toFixed(1);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{avg(temps)} °C</td>
        <td>{avg(pressures)} hPa</td>
        <td>{avg(humidities)} %</td>
      </tr>
    );
  }

  render() {
    if (!this.props.weather || this.props.weather.length === 0) {
        return <div style={{ padding: '1rem' }}>Enter a city name to see the weather forecast in Philippines. (etc. Manila, Cebu, Davao)</div>;
    }

    return (
      <div style={{ padding: '1rem' }}>
        <h3>5-Day Average Forecast in the Philippines</h3>
        <table className="table table-hover" style={{ marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
