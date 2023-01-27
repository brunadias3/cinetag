import { useFavoritoContext } from 'contextos/Favoritos'
import style from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'

export default function Card({ id, titulo, capa }) {
    
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={style.container}>
            <img src={capa} alt={titulo} className={style.capa} />
            <h2>{titulo}</h2>
            <img src={icone}
                alt="Favoritas filme"
                className={style.favoritar} 
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }} />
        </div>
    )
}
