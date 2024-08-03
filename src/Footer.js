import React from 'react'

const Footer = () => {
  const newdate = new Date();
  return (
    <footer className='Footer'>
    <p>Copyright &copy;{newdate.getFullYear()}</p>
    </footer>
  )
}

export default Footer