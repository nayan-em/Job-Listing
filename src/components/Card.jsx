import React from 'react'

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <>
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    </>
  )
}

export default Card

// children prop in react fetches all the jsx code around which this component is wrapped