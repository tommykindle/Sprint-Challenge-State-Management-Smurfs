import axios from 'axios';

export const Get_Smurf = 'Get_Smurf'

export const getSmurf = () => dispatch => {
  axios
    .get('localhost:3333/smurfs')
    .then(res => dispatch({ type: Get_Smurf, payload: res.data }))
    .catch(err => console.log('Error', err))
}