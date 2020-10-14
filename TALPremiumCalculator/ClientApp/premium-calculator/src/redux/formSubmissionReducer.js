const initialState = {
    premiumAmount: [],
    isLoad: false
  };
  
  const premiumReducer = (state = initialState, action) => {
    let newState = { ...state };
    if (action.type === "FORM_SUBMIT") {
      newState.premiumAmount = action.data;
      newState.isLoad = false;
      return newState;
    } else if (action.type === "FORM_SUBMITREQ") {
      newState = { ...state, isLoad: true };
      return newState;
    }
    return state;
  };
  export default premiumReducer;
  