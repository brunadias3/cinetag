import { useFavoritoContext } from 'contextos/Favoritos'
import style from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom';

export default function Card({ id, titulo, capa }) {

    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={style.container}>
            <Link className={style.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={style.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritas filme"
                className={style.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }} />
        </div>
    )
}
