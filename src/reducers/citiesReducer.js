const initialState = {
	cities: [
		'Austin',
		'Dallas',
		'New York'
	]
}

export default function citiesReducer(state = initialState, action) {
	switch(action.type) {
	    case 'ADD_CITY':
	    	return {
	    		cities: [...state.cities, action.city]
	    	}
		default:
			return state;
	}
}

export function addCity(city) {
	return {
		type: 'ADD_CITY',
		city: city,
	}
}