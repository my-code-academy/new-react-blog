const getUniqueElementsFromArray = (inputArray) => {
  const result = [];
  const map = new Map();
  for (const item of inputArray) {
    if (!map.has(item.title)) {
      map.set(item.title, true);    
      result.push(item);
    }
  }
  return result;
}

const addCardReducer = (state = [], action) => {
  switch (action.type) {
    case 'addCard':
      return state.concat([action.payload]);
    case 'addCards':
      return getUniqueElementsFromArray(state.concat(action.payload));
    default:
      return state;
  }
}

export default addCardReducer;