import { useState } from 'react';
import axios from 'axios';
import List from './components/List';
import Search from './components/Search';

function App() {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const handleSearch = (searchTerm) =>{
     axios.get(`http://localhost:3001/search-track/${searchTerm}`).then(response =>{
     
          setItems(response.data.result.canciones)
          setError(false);
      }).catch(error => {
          setError(true);
          setItems([]);
     })
  }

  return (
 
    <div className='container'>
       { error ? <p className='text-center'>Error al obtener los datos intente más tarde</p> : null}
       <Search onSearch={handleSearch}/>
       <List items={items} />
   </div>
  );
}

export default App;
