import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='container mx-auto my-64 bg-white'>{children}</div>
  )
}

export default MainLayout