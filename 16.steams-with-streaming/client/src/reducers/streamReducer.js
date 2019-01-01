import _ from 'lodash';
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types';

// Key interpolation syntax
export default (state={}, action) => {
    switch(action.type) {
        // Map keys is a function that's going to take an array and then return an object that keys of
        // this new object are going to be taken from each individual record(as its id) inside of the array.
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        // Whenever we get a action with FETCH_STREAM, we are taking our state object and its properties 
        // and add it to the new object with a new key value pair dynamically.
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        // omit is not changing the original state object, it rather creates a new object with all the properties from the state
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};