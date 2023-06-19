import axios from 'axios'

export default function postvgame(payload) {
    return async function (dispatch){
        var result = await axios.post('http://localhost:3003/videogames',payload); 
        return result                                                                                                 
    }
}