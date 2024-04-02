import React, { useState } from 'react'

import { Content, KeyBoard } from './companents'



const App = () => {

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-800 to-blue-300 font-semibold'>
      <h1 className="text-4xl text-white text-center pt-10">Wordiee</h1>

      <Content />

      <KeyBoard/>
    </div>
  );
}
export default App
