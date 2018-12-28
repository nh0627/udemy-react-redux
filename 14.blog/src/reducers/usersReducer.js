export default (state=[], action) => {
    switch(action.type) {
        case 'FETCH_USER':
        // Anytime that we return some data from a reducer we always have to return a new array or
        // a new object or a different valued string or a different value number if we expect redux to realize
        // that we made a change to the data inside of our application.
            return [...state, action.payload];
        default:
            return state;
    }
};