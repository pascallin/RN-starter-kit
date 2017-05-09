export default function user(state = { text: "" }, action) {
	console.log('--------> action',action);
	switch (action.type) {
		case 'FETCH_SUCCEEDED':
			return { ...state, text: action.data.payload.username };
		case 'FETCH_FAILED':
			return { ...state, text: "Opps!" };
		default:
			return state;
	}
}