export default function who(state = { name: "" }, action) {
	switch (action.type) {
		case 'Pascal':
			return { ...state, name: "Pascal Lin" };
		case 'Lin':
			return { ...state, name: "Lin Pascal" };
		default:
			return state;
	}
}