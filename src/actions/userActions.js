import * as types from '../constants/ActionTypes';

export function toggleMenu(status) {

	return {
		type: types.TOGGLE_MENU,
		menu: status
	}
}

export function addData(data) {

	return {
		type: types.ADD_DATA,
		data: data
	}
}

