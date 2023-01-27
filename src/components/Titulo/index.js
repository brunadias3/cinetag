import style from './Titulo.module.css'
import React from 'react'

export default function Titulo({ children }) {
  return (
    <div className={style.texto}>
        {children}
    </div>
  )
}
