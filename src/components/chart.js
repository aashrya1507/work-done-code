import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = React.createClass({
	render() {
		return (
			<Sparklines data={this.props.list} width={180} height={120}>
				<SparklinesLine color={this.props.color} />
				<SparklinesReferenceLine type="mean" />
			</Sparklines>
		);
	}
});

export default Chart;