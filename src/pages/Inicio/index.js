import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import Rodape from 'components/Rodape'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'

export default function Inicio() {
  return (
    <>
      <Cabecalho />

      <Banner imagem="home" />
      
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <Card id='1' titulo="Gato Bonifacio" capa='https://st.depositphotos.com/1400069/3488/i/450/depositphotos_34885979-stock-photo-funny-gray-cat-on-a.jpg' />
      <Rodape />
    </>
  )
}
