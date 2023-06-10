import React from 'react'

const GifGridItem = ({ title, url}) => { /* Obteniendo los datos del objeto mediante desestructuracion */

  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
