import React from 'react'
import Title from '../utils/Title'
import Items from '../utils/Items'

const Sales = ({endPoint:{title,items}}) => {
  return (
    <div >
      <Title title={title}></Title>
      <div>
        {items?.map((item, index) =>{
          return <Items key={index} {...item}></Items>
        })}
        </div>
    </div>
  )
}

export default Sales