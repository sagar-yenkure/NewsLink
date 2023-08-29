import React from 'react'

function Cat(props) {
  const { pic, title, desc, read, more } = props
  return (
    <div className="cat1 w-[30rem] h-[20rem] m-2 rounded-md relative">
      <img className=' rounded-md ' src={pic} alt="catgoriespic"/>
      <h1 className='text-5xl font-semibold text-blue-500 absolute top-[10%] ml-5'>{title}</h1>
      <p className='font-semibold absolute top-[30%] ml-5'>{desc}</p>
      <button onClick={more} className='bg-white text-blue-500 transition ease-in-out delay-1 hover:bg-blue-500 hover:text-white  rounded-xl font-bold m-3 p-3 absolute top-[50%] ml-5'>{read}</button>

    </div>
  )
}

export default Cat