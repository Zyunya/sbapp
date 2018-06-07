
const initialState = [{

  }]

  export default  function menuStatus(state = true, action) {

	switch(action.type) {

		case 'TOGGLE_MENU' :
			return action.menu;

		case 'CLOSE' :
			return state;

		default:
			return state;
	}
}


