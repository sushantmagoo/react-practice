import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
  //console.log('Action Recieved: ', action);
  switch (action.type) {
    case FETCH_WEATHER:
      //********************************************//
      // return state.push([action.payload.data]);
      // '.push' will mutate the existing state,
      // instead use '.concat', this will create
      // and return a new instance of state.
      // return state.concat([action.payload.data]);
      // Instead of using old syntax, new ES6 syntax,
      // new element will added to the front of list.
      //********************************************//
      return [ action.payload.data, ...state ];
  }
  return state;
}
