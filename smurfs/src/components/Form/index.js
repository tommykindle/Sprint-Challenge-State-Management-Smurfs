import React, { useState } from 'react';


export const newSmurf = props => {
  const [addSmurf, setSmurf] = useState();

  const handleChanges = e => {
    setSmurf();
  };

  return (
    <form>
      <h1>Add a Smurf</h1>
      <label htmlFor="name">Name</label>
      <input
        name='name'
        type='text'
        placeholder='Enter Smurfs Name'
        value={addSmurf}
        onChange={handleChanges}
      />
      <input
        weight='weight'
        type='text'
        placeholder='Enter Smurfs Weight'
        value={addSmurf}
        onChange={handleChanges}
      />
      <input
        height='height'
        type='text'
        placeholder='Enter Smurfs Height'
        value={addSmurf}
        onChange={handleChanges}
      />
    </form>
  )
}