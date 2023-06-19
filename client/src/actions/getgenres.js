import { GET_GENRES } from '.';

import axios from 'axios'

export default function getgenres() {
    return async function (dispatch){
        var result = await axios.get('http://localhost:3003/genres'); 
        return dispatch({ 
            type: GET_GENRES, 
            payload: result.data
        })                                                                                                 
    }
}