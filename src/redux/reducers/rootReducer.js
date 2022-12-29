import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import eductionReducer  from "./educationReducer";
import documentReducer from "./documentReducer";
import { firebaseReducer } from "react-redux-firebase";
import {firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
const rootReducer=combineReducers({
    document:documentReducer,
    contact:contactReducer,
    education:eductionReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    auth:authReducer
})

export default rootReducer