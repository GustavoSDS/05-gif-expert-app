import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export default function useFetchGifs(category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  /* 
   ? Uso del user Effect para ejecutar el fetch solo cuando cambia la categoria (inputSearchValue) */
  useEffect(() => {
    /*  
     ? Obtener imagenes mediante el helper getGifs (funcion) que retorna una promesa de la data */
    getGifs(category)
      .then(imgs => {
        /* 
        ? Cambiar el estado de la data despues de 3segundos */
        setTimeout(() => {
          /* 
          ? Escribo los datos que recibo de la promesa mediante la funcion setState() */
          setState({
            data: imgs,
            loading: false,
          });
        }, 300);
      })
  }, [category]);

  return state; /* 
  ? Retorno el state con los datos del fetch */
}