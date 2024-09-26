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
      <div className='grid mb-5 m-auto'>
        <h1 className='m-auto'>Cantidad de ramos</h1>
        <div className='m-auto'>
          {grades}
        </div>
        <div className='flex'>
          <button className='ml-4' onClick={() => discount()}>descontar</button>
          <button className='ml-4' onClick={() => add()}>agregar</button>
        </div>
      </div>
      <div className='flex'>
        {
          Array.from({ length: grades }).map(
            (_, index) => (
              <Nota key={index} onGradeChange={handleGradeChange} />
            )
          )
        }
      </div>
      <button onClick={handleCalculate}>Calcular</button>
      suma : {totalGrade.toFixed(1)} - total : {simple}
    </div>
  )
}

export default App