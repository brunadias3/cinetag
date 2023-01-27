import style from './Favoritos.module.css'
import React from 'react'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />

      <Titulo>
        <h1>Meus Favoritos </h1>
      </Titulo>

      <section className={style.container} >
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}
      </section>

    </>
  )
}
