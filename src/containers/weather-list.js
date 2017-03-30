import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

const WeatherList = React.createClass({
	
	renderWeather(cityData) {
		const name = cityData.city.name
		const temps = cityData.list.map( (data) => data.main.temp);
		const pressure = cityData.list.map( (data) => data.main.pressure);
		const humidity = cityData.list.map( (data) => data.main.humidity);

		return (
			<tr key={name}>
				<td className="chart-description">{name}</td>
				<td className="chart-container">
					<Chart list={temps} color="orange"/>
				</td>
				<td className="chart-container">
					<Chart list={pressure} color="red"/>
				</td>
				<td className="chart-container">
					<Chart list={humidity} color="green"/>
				</td>
			</tr>
		);
	},
	
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<th>City</th>
					<th>Temprature</th>
					<th>Pressure</th>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
});

function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);