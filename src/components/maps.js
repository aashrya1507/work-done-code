import React from 'react';

const Maps = React.createClass({
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	},
	render() {
		return <div ref="map" />
	}
});

export default Maps;