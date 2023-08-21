import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteDog } from '../../features/dogs/dogSlice';
import "../Register/signin.scss";

function DogsItem({dog}) {
  const dispatch = useDispatch()
  return (
  <>
  <div className="dog">
    <div>
     <h1>Registered Dogs</h1>
     </div>
     <h2>Pet Name: {dog.petname}</h2>
     {/* <h2>Dog Bread:{dog.DogBread}</h2>
     <h2>Dog Sex:{dog.Sex}</h2>
     <h2>Dog Type:{dog.DogType}</h2>
     <h2>Dog Descrition:{dog.DogDescrition}</h2>
     <h2>Dog BirthDay:{dog.DogDateOfBirth}</h2>
     <h2>Dog ID:{dog._id}</h2> */}
     <button onClick={() => {
      dispatch(deleteDog(dog._id))
     }} className="close">X</button>
    </div>
  </>
  )
}

export default DogsItem