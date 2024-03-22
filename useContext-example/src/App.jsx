import React, { createContext, useState } from 'react';
import ChildA from './ChildA';

export const userContext = createContext(null)

const App = () => {
  const [userName, setUsername] = useState("Masudh")
  return (
    <userContext.Provider value={{userName, setUsername}}>
      <div>
        <ChildA/>
      </div>
    </userContext.Provider>    
  );
}

export default App
