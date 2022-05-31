import React from 'react'

const Button = ({ onClick, children }) => {
  return (
    <button className='btn btn-primary btn-sm' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button