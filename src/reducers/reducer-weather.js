export default function(state = [], action) {
	switch(action.type) {
		case 'fetch-weather': 
		 return [action.payload.data, ...state];
	};

	return state;
}