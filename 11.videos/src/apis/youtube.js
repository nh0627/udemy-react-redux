import axios from 'axios';

const KEY = 'API KEY'; // Need to change 'API KEY' to personal API access key

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});