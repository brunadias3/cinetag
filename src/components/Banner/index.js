import style from './Banner.module.css'

import React from 'react'

export default function Banner({ imagem }) {
    return (
        <div
            className={style.capa}
            style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}
        >
        </div>
    )
}
