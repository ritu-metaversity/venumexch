import {React, useEffect, useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router';
import './AlertBtn.css'

const AlertBtn = ({val}) => {
  const [alertTimeOut, setAlertTimeOut] = useState(true)
  let { id } = useParams();



  setTimeout(()=>{
    setAlertTimeOut(false)
  }, 3000)


  
console.log(val,alertTimeOut,"alertTimeOutalertTimeOutalertTimeOut")


  return (
    <div>
      {
        alertTimeOut && (
          <Alert variant="danger">
          {val} 
        </Alert>
        )
      }
        
    </div>
  )
}

export default AlertBtn