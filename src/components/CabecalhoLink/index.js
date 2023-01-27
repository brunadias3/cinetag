import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import style from './CabecalhoLink.module.css'

export default function CabecalhoLink({ url, children}) {
  return (
    <Link to={url} className={style.link}>
        {children}
    </Link>
  )
}
