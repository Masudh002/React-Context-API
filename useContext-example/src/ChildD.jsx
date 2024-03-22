import React from 'react'
import { useContext } from 'react'
import { userContext } from './App'

const ChildD = () => {
    const {userName, setUsername} = useContext(userContext);
    const updateUsername = () => {
        setUsername("NewName");
      }
  return (
    <div>
      <h1>{userName}</h1>
      <button onClick={updateUsername}>Update name</button>
      {/*<button onClick={()=> {setUsername("updated name")}}>Update name</button>*/}
    </div>
  );
}

export default ChildD


