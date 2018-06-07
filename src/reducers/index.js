import { combineReducers, createStore } from 'redux'
import menu from './menu'
import dataTable from './data'


var reducer = combineReducers({
	menu,
	dataTable
})

var store = createStore(reducer)

export default store