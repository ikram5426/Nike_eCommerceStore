import React from 'react'
import Title from '../utils/Title'
import Items from '../utils/Items'

const Sales = ({endPoint:{title,items}}) => {
  return (
    <div className='nike-container' style={{marginTop:50}} >
      <Title title={title}></Title>
      <div className='grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-5'>
        {items?.map((item, index) =>{
          return <Items key={index} {...item}></Items>
        })}
        </div>
    </div>
  )
}

export default Sales