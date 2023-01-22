import React from 'react';
import dateFormat from "dateformat";

const List = ({items}) => {
   
  
     
  const listItems = items.map((item)=> {
    return(
    <tr key={item.cancion_id}>
      <td>{item.nombre_tema}</td>
      <td>{item.nombre_album}</td>
      <td><a href={item.preview_url}>{item.preview_url}</a></td>
      <td>{item.precio.valor} {item.precio.moneda}</td>
      <td>{dateFormat(item.fecha_lanzamiento, "dd-mm-yyyy")}</td>
    </tr>)
  }) 
  return (
      <div>
       <table className='table'>
        <thead className='thead-dark'>
          <tr>
          <th>Nombre Canción</th>
          <th>Nombre Album</th>
          <th>Url preview</th>
          <th>Precio</th>
          <th>Fecha de lanzamiento</th>
          </tr>
        </thead>
        <tbody>
         {items.length ? listItems : <tr className='text-center'><td colSpan={5}><p className='text-center'>No hay datos para mostrar</p></td></tr>}
        </tbody>
       </table>
       </div>
      );
}

export default List;            