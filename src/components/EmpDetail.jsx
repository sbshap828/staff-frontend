import { useNavigate } from 'react-router-dom';

function EmpDetail({ empDetail, setEmpDetail }) {

  let navigate = useNavigate()

  function handleClick(){
    console.log("nav")
    setEmpDetail(EmpDetail)
    navigate("/EmpDetail")
  }
//not sure we need this
  return (
    <div onClick={handleClick}>
       <h1>Hello, I'm {EmpDetail.name}</h1>
       4r {/* <img className="pod-images" src={pod.hdurl} alt={pod.title} /> */}
    </div>
  )
}

export default EmpDetail