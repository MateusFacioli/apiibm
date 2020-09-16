import axios from 'axios';
var api = axios.create({
    baseURL:'https://api.stackexchange.com/search/advanced?site=stackoverflow.com&q='
});


export default api; 