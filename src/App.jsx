import { useState } from 'react'
import Nota from './Nota/views/Nota'

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className='grid'>
      Cantidad de ramos
      <div className='mb-5'>
        {count}
        <button className='ml-4' onClick={() => setCount(count + 1)}>Agregar</button>
        <button className='ml-4' onClick={() => setCount(count - 1)}>Descontar</button>
      </div>
      <label htmlFor="ramo">
        Ramo
        <input className="rounded-md border-2" type="text" name="ramo" id="ramo" />
      </label>
      {
        Array.from({ length: count }).map(
          (_, index) => (
            <Nota key={index} />
          )
        )
      }
    </div>
  )
}

export default App
