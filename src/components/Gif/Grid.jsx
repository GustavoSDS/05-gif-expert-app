import useFetchGifs from "../../hooks/useFetchGifs";
//// import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => { /* prop category que recibe el componente */

  const { data: images, loading } = useFetchGifs(category); /* Obtener la data del custom hooks useFetchGifs*/

  return (
    <>
      <h2 className="animate__animated animate__pulse">{category}</h2>

      {loading && <p className="animate__animated animate__flash">Loading</p>} {/* Evaluar si loading es true y mostrar el parrafo si no lo es no muestra nada */}
      <div className="gifs">
        {
          images.map(({ url, id, title }) => ( // ? De nuevo se utiliza el map para mostrar las propiedades del objeto
            //// <GifGridItem
            ////    key={img.id}
            ////    {...img} Enviando el objeto completo al componente GifGridItem para que lo renderize 
            ////  />
            <div key={id} className='card animate__animated animate__flipInY'>
              <img src={url} alt={title} />
              <p>{title}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default GifGrid
