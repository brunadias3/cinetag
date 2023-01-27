import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import style from './Cabecalho.module.css'
import CabecalhoLink from '../CabecalhoLink'

export default function Cabecalho() {
  return (
    <header className={style.cabecalho}>
        <Link to="./">
            <img src={logo} alt='Logo do CineTag' />
        </Link>
        <nav>
          <CabecalhoLink url="./" >Home</CabecalhoLink>
          <CabecalhoLink url="./Favoritos" >Favoritos</CabecalhoLink>
        </nav>
    </header>
  )
}
