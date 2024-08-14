import React, { useState } from 'react'
import CardsContainer from './Components/CardsContainer'
import Form from './Components/Form'

function App() {

  const [cardsData, setCardsData] = useState([])
  
  return (
    <div className='w-full min-h-screen bg-zinc-200 flex flex-col items-center justify-center px-8'>
      <CardsContainer 
        cardsData={cardsData}
        setCardsData={setCardsData}
      />
      <Form 
        setCardsData={setCardsData}
      />
    </div>
  )
}

export default App