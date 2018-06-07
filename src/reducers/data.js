
const initialState = [{

}]

export default  function dataList(state = [], action) {

  switch(action.type) {

      case 'ADD_DATA' :
          return state.concat(action.data);

      default:
          return state;
  }
}

