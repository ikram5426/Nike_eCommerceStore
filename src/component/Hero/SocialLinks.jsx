import React from 'react'

const SocialLinks = ({icon}) => {
  return (
    <div>
      <img src={icon} alt='icon/social' className='w-8 h-8 md:w-6 sm:w-5 lg:h-6 md:h-5 flex items-center  transition-all duration-200 hover:scale-110 cursor-pointer gap-4'/>
    </div>
  )
}

export default SocialLinks