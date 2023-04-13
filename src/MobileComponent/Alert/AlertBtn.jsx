import {React, useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import './AlertBtn.css'

const AlertBtn = ({val}) => {
  const [alertTimeOut, setAlertTimeOut] = useState(true)

  setTimeout(()=>{
    setAlertTimeOut(false)
  }, 3000)


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