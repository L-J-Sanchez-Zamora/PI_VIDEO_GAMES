import axios from 'axios';

export default function deletegame(payload) {
    return async function (dispatch) {
        var result = await axios.post(`http://localhost:3005/videogames/delete/:${payload}`);
        return result
    }
}