const axios = require('axios');

export function getDrinks(){
    return async function(dispatch){
        dispatch({
            type: 'LOADING'
        })
        const conn= await axios.get('http://localhost:3001/api/auroras');
        return dispatch({
            type: 'GET_DRINKS',
            payload: conn.data
        })
    }
};

export function getDetail(id){
    try {
        return async function(dispatch){
            const detail= await axios.get('http://localhost:3001/api/auroras/' + id);
            return dispatch({
                type: 'GET_DETAIL',
                payload: detail.data
            })
        }
    } catch (error) {
        console.log('ACA ESTA EL ERROR', error)
    }
    
};

export function getNames(name){
    return async function(dispatch){
       const names= await axios.get('http://localhost:3001/api/auroras?name=' + name);
       return dispatch({
           type: 'GET_NAMES',
           payload: names.data
       })
    }
};