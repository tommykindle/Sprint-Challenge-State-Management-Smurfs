import { Get_Smurf, Add_Smurf } from '../Actions'

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
    case 'Add_Smurf':
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          { smurfs: action.payload }
        ]
      }
    default:
      return state;
  }
}