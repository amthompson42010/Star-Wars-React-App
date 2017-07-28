import React from 'react';
import { connect } from 'react-redux';
import {
	Link
} from 'react-router-dom';

class Cities extends React.Component {

	render() {
		console.log('props: ', this.props);
		const { cities } = this.props;
		return (
			<div>
				<h1>Cities</h1>
				{
					cities.map((item, index) => (
						<div key={index}>
							<Link
								to={`/city/${item}`}
							>
								<h3>{item}</h3>
							</Link>
						</div>
					))
				}
			</div>
		)
	}
}

export default connect(
	(state) => ({
		cities: state.citiesReducer.cities
	})
)(Cities);