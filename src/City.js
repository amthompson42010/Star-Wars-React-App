import React from 'react';

class City extends React.Component {
	render() {
		const { cityName } = this.props.match.params;
		console.log(this.props);
		return (
			<div>
				<h2>{cityName}</h2>
			</div>
		)
	}
}

export default City;