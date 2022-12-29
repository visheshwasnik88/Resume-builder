import * as contactActions from '../actions/action'
import intitalState from './initialState.json'

const contactReducer=(state=intitalState.contact,action)=>{
    // console.log(state)
    switch(action.type){

        case contactActions.SET_CONTACT:{
         return{...action.payload}
        }
        case contactActions.UPDATE_CONTACT:{
            return{...action.payload}
           }

           default: return state;
    }
}
export default contactReducer