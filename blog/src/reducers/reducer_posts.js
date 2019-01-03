import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state={}, action){
  switch(action.type){
    case DELETE_POST:
      return _.omit( ...state, action.payload);
    case FETCH_POST:
      // [someKey]: someValue
      // will create Key: Value pair
      // inside object.
      // Apart, from that, we are not
      // removing object from old state,
      // instead we are appending new
      // key-value pair to old state.
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
