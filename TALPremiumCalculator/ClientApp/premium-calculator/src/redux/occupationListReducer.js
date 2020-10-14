const initialState = {
  occupationList: [],
  isLoad: false
};

const occupationListReducer = (state = initialState, action) => {
  let newState = { ...state };
 
  if (action.type === "OCCUPATION_LIST") {
    newState.occupationList = action.data;
    
    newState.isLoad = false;
    return newState;
  } else if (action.type === "OCCUPATION_LISTREQ") {
    newState = { ...state, isLoad: true };
    
    return newState;
  }
  return state;
};
export default occupationListReducer;
