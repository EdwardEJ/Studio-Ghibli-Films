import React from 'react'
import name from '../Studio_Ghibli_logo.svg'

const Header = () => {
  return (
    <>
      <header>
        <h1>
          <img src={name} alt='Studio Ghibli' />
        </h1>
      </header>
    </>
  )
}

export default Header 