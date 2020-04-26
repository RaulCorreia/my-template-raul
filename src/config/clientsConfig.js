import axios from 'axios';

export default clients = {
    ['default']: {
        client: axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            responseType: 'json',
            timeout: 6000
        })
    }
};
