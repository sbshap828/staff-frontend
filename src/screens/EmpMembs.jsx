import {useState, useEffect} from 'react'
import EmpDetail from '../components/EmpDetail.jsx'
import {getEmpMembs} from '../services/empmembs.js'

function EmpMembs({setEmpDetail}) {
    const [EmpMembs, setEmpMembs] =useState([])

    useEffect(()=>{
        fetchEmpMembs()
    }, [])

   async function fetchEmpMembs() {
    const allEmpMembs = await getEmpMembs()
    setEmpMembs(allEmpMembs)
   }

  return (
    
    <div className="main-container">
      <h1>General all employees with  detail.jsx screen</h1>
      <div className="emps-container">
        {EmpMembs.map((employee, i) => (
          <EmpDetail key={i} employee={employee} setEmpDetail={setEmpDetail}/>
        ))}
      </div>
    </div>
  )

}

export default EmpMembs