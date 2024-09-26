import { useState } from 'react'
import Nota from './Nota/views/Nota'

function App() {
  const [grades, setGrades] = useState(1);
  const [totalGrade, setTotalGrade] = useState(0);
  const [simple, setSimple] = useState(0);

  const add = () => setGrades(grades + 1)

  const discount = () => {
    if (grades > 1) {
      setGrades(grades - 1)
    }
  }

  const handleGradeChange = (grade) => {
    setTotalGrade(prevTotalGrade => prevTotalGrade + parseFloat(grade));
  }

  const handleCalculate = () => {
    setSimple((totalGrade / grades).toFixed(2));
    setTotalGrade(0);
  }

  return (
    <div className='grid'>
      <section className='grid mb-5 m-auto'>
        <h1 className='m-auto'>Cantidad de notas</h1>
        <div className='m-auto'>
          {grades}
        </div>
        <div className='flex'>
          <button className='ml-4' onClick={() => discount()}>descontar</button>
          <button className='ml-4' onClick={() => add()}>agregar</button>
        </div>
        <div className='flex'>
          <label htmlFor="simple" className='mx-4'>
            Simple
            <input type="checkbox" name="simple" id="simple" />
          </label>
          <label htmlFor="ponderado" className='mx-4'>
            Ponderado
            <input type="checkbox" name="ponderado" id="ponderado" />
          </label>
        </div>
      </section>
      <section>
        <div className='flex flex-wrap'>
          {
            Array.from({ length: grades }).map(
              (_, index) => (
                <Nota key={index} onGradeChange={handleGradeChange} />
              )
            )
          }
        </div>
        <button onClick={handleCalculate}>Calcular</button>
      </section>
      <section>
        <div>
          Nota final (promedio simple) : {simple}
        </div>
        <div>
          Nota final (promedio ponderado) : {simple}
        </div>
      </section>
    </div>
  )
}

export default App