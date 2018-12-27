import axios from 'axios';

// This create method is going to create a pre-customized instance of the axios.
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID API KEY' // Need to change 'API KEY' to personal API access key
    }
});