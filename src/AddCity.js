import React from 'react';
import { addCity } from './reducers/citiesReducer';
import { connect } from 'react-redux';

class AddCity extends React.Component {
	
	state = { input: ''}

	onChange = (event) => {
		this.setState({
			input:event.target.value
		})
	}

	addCity = () => {
		this.props.dispatchAddCity(this.state.input)
	}

	render() {
		return (
			<div>
				<div>
					<h1>Add City</h1>
				</div>
				<input
					style={styles.input}
					onChange={this.onChange}
				/>
				<button onClick={this.addCity}>Add City</button>
			</div>
		)
	}
}

const styles = {
	input: {
		height: 50, width: 200, backgroundColor: '#ddd'
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatchAddCity: (city) => dispatch(addCity(city)),
	}
}

export default connect(null, mapDispatchToProps)(AddCity);