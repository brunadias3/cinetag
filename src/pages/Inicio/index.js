import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
//import videos from 'json/db.json'
import style from './Inicio.module.css'
import { useEffect, useState } from 'react';

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])

  return (
    <>
      <Banner imagem="home" />

      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section className={style.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>

    </>
  )
}
