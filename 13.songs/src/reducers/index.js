import { combineReducers } from 'redux';

const songsReducer = () => {
    // Note: these are static items!
    return [
        { title: 'IDOL', duration: '3:51' },
        { title: 'Fire', duration: '4:55' },
        { title: 'DNA', duration: '4:15' },
        { title: 'Blood Sweat & Tears', duration: '6:03' },
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        // Add action here!
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});