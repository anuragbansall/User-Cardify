import React from 'react'
import Card from './Card'

function CardsContainer({cardsData, setCardsData}) {
  return (
    <div className='w-full min-h-[20rem] max-h-[20rem] overflow-y-auto overflow-x-hidden p-4 place-items-center grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {cardsData.map((el, idx) => (
            <Card 
                name={el.name}
                email={el.email}
                image={el.image}
                description={el.description}
                setCardsData={setCardsData}
                key={idx}
                idx={idx}
            />
        ))}
    </div>
  )
}

export default CardsContainer