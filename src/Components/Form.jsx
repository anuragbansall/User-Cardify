import React, { useEffect, useState } from 'react'

function Form({setCardsData}) {

    // setCardsData([{name: "Anurag Bansal", email: "anurag@gmail.com", image: "https://anurag.png"}])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: "",
        description: ""
    })

    const handleFormDataChange = (event) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const handleFormDataSubmit = (event) => {
        event.preventDefault()
        setCardsData((prevData) => (
            [...prevData, {...formData, image: formData.image.trim()}]
        ))
        setFormData({
            name: "",
            email: "",
            image: "",
            description: ""
        })
    }

  return (
    <div className='mt-8'>
        <form className='flex flex-wrap justify-center items-center gap-x-10 gap-y-4' onSubmit={handleFormDataSubmit}>
            <input required type="text" name="name" value={formData?.name} className='rounded-md px-2 py-1 font-semibold outline-none' placeholder='Enter Name' onChange={handleFormDataChange} />

            <input required type="email" name="email" value={formData?.email} className='rounded-md px-2 py-1 font-semibold outline-none' placeholder='Enter Email' onChange={handleFormDataChange} />

            <input required type="text" name="description" value={formData?.description} className='rounded-md px-2 py-1 font-semibold outline-none' placeholder='Enter Description' onChange={handleFormDataChange} />

            <input type="text" name="image" value={formData?.image} className='rounded-md px-2 py-1 font-semibold outline-none' placeholder='Enter Image URL' onChange={handleFormDataChange} />

            <button className='px-4 py-2 text-white bg-blue-500 rounded-md font-semibold'>Submit</button>
        </form>
    </div>
  )
}

export default Form