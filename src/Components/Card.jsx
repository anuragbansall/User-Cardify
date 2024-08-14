import React from 'react'
import userIcon from "../assets/user-icon.png"

function Card({name, email, image, description, setCardsData, idx}) {

    const handleRemoveData = (cardIdx) => {
        setCardsData(prevData => (
            prevData.filter((item, idx) => idx !== cardIdx)
        ))
    }

  return (
    <div className='w-[14rem] rounded-lg overflow-x-hidden h-full bg-zinc-100 flex flex-col items-center p-4'>
        <div className="w-[6rem] h-[6rem] overflow-hidden rounded-full bg-zinc-200">
            <img src={image ? image : userIcon} className="h-full w-full object-cover object-top" />
        </div>
        <h2 className='max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-xl capitalize font-semibold mt-2 text-slate-700'>{name}</h2>
        <h3 className='max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-500 mb-1'>{email}</h3>
        <p className='max-w-[90%] max-h-[4rem] overflow-hidden text-ellipsis font-semibold mt-1 text-slate-600 text-[0.9rem] leading-4 text-center'>{description}</p>
        <button className='px-4 py-2 bg-rose-600 font-semibold text-white rounded-md mt-4' onClick={() => handleRemoveData(idx)}>Remove</button>
    </div>
  )
}

export default Card