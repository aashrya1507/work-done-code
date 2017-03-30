import axios from 'axios';

const api_key = 'c6a1f46e4aae057f59065e129eb73b25';

export default function fetchWeather(term) {
	const url_key = `http://api.openweathermap.org/data/2.5/forecast?q=${term},in&appid=${api_key}`;
	const query = axios.get(url_key);
	return {
		type: 'fetch-weather',
		payload: query
	};
}