import { useState } from "react";
import AddCategory from '../AddCategory'
import GifGrid from "./Grid";

export default function ExpertApp() {

  const [categories, setCategories] = useState(['Dragon ball']); /* 
  ? Establecer una categoria por defecto en el useState */

  return (
    <div className="container">
      <h2 className="animate__animated animate__backInDown" >Gif Expert App</h2>
      <AddCategory
        setCategory={setCategories}
      />

      <hr />

      {
        categories.map((category) => ( /* 
        ? Uso del map para mostrar el contenido del objeto categories */
          <GifGrid /* 
          ? Componente GifGrid que recibe las propiedads del objeto mediante props*/
            key={category}
            category={category}
          />
        ))
      }
    </div>
  );
}