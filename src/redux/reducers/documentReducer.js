import * as documentActions from "../actions/action";
import intialstate from "./initialState.json";

console.log(intialstate.document);
const documentReducer = (state = intialstate.document, action) => {
  switch (action.type) {
    case documentActions.SET_SKIN:
      return {
        ...state,
        id: action.payload.id,
        skinCd: action.payload.skinCd,
      };
    case documentActions.UPDATE_SKIN: {
      return {
        ...state,
        skinCd: action.payload.skinCd,
      };
    }
    default:
      return state;
  }
};

export default documentReducer;
