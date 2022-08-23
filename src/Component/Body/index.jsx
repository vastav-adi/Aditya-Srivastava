import React from 'react'
import MinimalCard from '../MinimalCard'

export default function Body() {

  let titleArr = ["App", "Aditya", "Swamy", "My Work"];

  return (
    <div className='body-container'>
      <div className='row m-0 p-0'>
        {
          titleArr.map((title, index) => (
            <div key={index} className='col-6 p-0'>
              <MinimalCard title={title} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
