import axios from 'axios';

export const Get_Smurf = 'Get_Smurf'

export const getSmurf = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: Get_Smurf, payload: res.data }))
    .catch(err => console.log('Error', err))
}

export const Add_Smurf = 'Add_Smurf'

export const addNewSmurf = (addSmurf) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', addSmurf)
    .then(res => dispatch({ type: Add_Smurf, payload: res.data }))
    .catch(err => console.log('Cannot Add Smurf', err))
}