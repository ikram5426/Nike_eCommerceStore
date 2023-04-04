import React from 'react'
import Title from '../utils/Title'
import Items from '../utils/Items'

const Sales = ({ifExist , endPoint:{title,items}}) => {
  return (
    <div className='nike-container' >
      <Title title={title} ifExist={ifExist}></Title>
      <div className={`grid items-center justify-items-center  gap-10 lg:gap-7  mt-5 ${ifExist? "  grid-cols-3 xl:grid-cols-2 sm:grid-cols-1" :'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items?.map((item, index) =>{
          return <Items key={index} ifExist={ifExist} {...item}></Items>;
        })}
        </div>
    </div>
  )
}

export default Sales