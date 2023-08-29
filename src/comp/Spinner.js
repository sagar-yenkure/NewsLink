// import React, { Component } from 'reac from 'autoprefixer'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className='flex justify-center' >
      <img className='w-14' src={loading} alt="loading" />
    </div>
  )
}
export default Spinner