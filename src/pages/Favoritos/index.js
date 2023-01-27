import style from './Favoritos.module.css'
import React from 'react'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'

export default function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />

      <Titulo>
        <h1>Meus Favoritos </h1>
      </Titulo>

      <section className={style.container} >
        <Card id='2' titulo='Gato bonifácio' capa='uu' />
      </section>
      
    </>
  )
}
