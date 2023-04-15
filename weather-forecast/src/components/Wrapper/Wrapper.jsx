import React from 'react'
import style from '../Wrapper/Wrapper.module.css'
import NavBar from '../NavBar/NavBar'
import Container from '../Container/Container'

function Wrapper() {
  return (
    <div className={style.wrapper}>
      <NavBar></NavBar>
      <Container></Container>
    </div>
  )
}

export default Wrapper