import { Get_Smurf } from '../Actions'

const initialState = {
  name: '',
  age: '',
  height: '',
  id: '',
  smurfs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Get_Smurf:
      return {
        ...state,
        smurfs: action.payload
      }
    default:
      return state;
  }
}