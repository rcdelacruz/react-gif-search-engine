import { REQUEST_GIFS, FETCH_FAVORITED_GIFS } from '../actions';

const initialState = {
  data: [],
  favorites: [],
};

const arr = [];

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state, data: action.payload.body.data,
      };
    case FETCH_FAVORITED_GIFS:
      for (const i in action.payload) { // eslint-disable-line 
        if (action.payload.hasOwnProperty(i)) { // eslint-disable-line 
          arr.push(action.payload[i]);
        }
      }
      return {
        ...state, favorites: arr,
      };
    default:
      return state;
  }
}
