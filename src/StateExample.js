import React from 'react'
import { useState } from 'react';

export default function StateExample() {

 // let user = "React"
 const [user,setUser] = useState('React')

  const changeName = () => {
    setUser('JS')
    console.log(user)
  }

  return (
    <>
        <h3>{user}</h3>
        <button onClick={changeName}>ChangeName</button>
    </>
  )
}
