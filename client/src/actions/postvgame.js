import axios from 'axios';

export default function postvgame(payload) {
    return async function (dispatch) {
        var result = await axios.post('http://localhost:3005/videogames', payload);
        return result
    }
}