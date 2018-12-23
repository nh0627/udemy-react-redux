import axios from 'axios';

// This create method is going to create a pre-customized instance of the axios.
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 744d6554319d0ffdc56921c1031e0565ca11082ce689294cf9a02189fe9d04a6'
    }
});