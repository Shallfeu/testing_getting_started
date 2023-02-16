const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString');

const baseUrl = 'https://jsonplaceholder.typicode.com';

const getData = async () => {
    try {
        const response = await axios.get(baseUrl + '/users');
        const userIds = response.data.map((user) => user.id);
        return mapArrToString(userIds);
    } catch (error) {
        console.log(error);
    }
};

module.exports = getData;
