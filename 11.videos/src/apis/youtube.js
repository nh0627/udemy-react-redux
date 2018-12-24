import axios from 'axios';

const KEY = 'AIzaSyDV4YWhhydfyk1NaG0XosTITKA1fG15gps';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});