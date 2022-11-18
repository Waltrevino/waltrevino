import React, { useState } from 'react'
import API from '../utils/API'
import Button from '../components/Button';
import pepper from './pepper.jpg'

function CanvasDOS(){

  const [dog, setDog] = useState({
    "message": pepper,
    "status": "succes"
  });

  const getPerro = () => {
    console.log(dog.message)
    API.getPerro()
      .then(res => {
        setDog(res.data)
        // console.log(dog.algo)
        // setDog({...dog, "algo": "someting just said...."})
        // console.log(dog.algo)
      })
  }

{console.log(dog)}
  return (
    <div className="page-wrapper">
    <div className="page-container max-height">
      <div className="page-content iframe canvasDOS">
      {/* <button onClick={() => getPerro()}>Get Next Img</button> */}
      <Button perro={getPerro}/>
      <img src={dog.message} alt="" />
      </div>
    </div>
  </div>
  )



}

export default CanvasDOS;