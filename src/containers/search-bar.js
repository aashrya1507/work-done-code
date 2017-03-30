import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchWeather from '../actions/index';

const SearchBar = React.createClass({
	getInitialState() {
		return {
			term: ''
		};
	},
	handleInput(event) {
		this.setState({
			term: event.target.value
		}); 
	},
	handleSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	},
	render() {
		return (
			<form className="input-group" onSubmit={this.handleSubmit}>
				<input 
					placeholder="Input City name"
					value={this.state.term} 
					onChange={this.handleInput}
					className="form-control"
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
});

function mapDispatchToProps(disaptch) {
	return bindActionCreators({fetchWeather}, disaptch);
};

export default connect(null, mapDispatchToProps)(SearchBar);