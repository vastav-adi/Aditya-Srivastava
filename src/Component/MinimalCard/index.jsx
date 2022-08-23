import React from 'react'

export default function MinimalCard(props) {
  return (
    <div className='cardlike cardlike-m cardlike-noborder'>
      <div className='cardlike-header'>
        {props.title}
      </div>
    </div>
  )
}
