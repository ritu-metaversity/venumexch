import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import "./Footer.css"
import Rulesandregulation from '../rules/Rulesandregulation';

const Footer = () => {

  const [show, setShow] = useState(false);
  const [trueee, setTrueee] = useState(false);

  const [plus18, setPlus18] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleProhibited = (value) => {
    
    setShow(true)
    if (value === "plus18") {
      setPlus18(true)
    }else{setPlus18(false)}
  }
  return (
    <div>
    {/* <div style={{marginTop: "43px"}}> */}
      <footer data-v-2b4e1d6e=""   className="footer" style={{ width: "100%" }}>
        <p data-v-2b4e1d6e=""   className="m-b-0 text-center p-t-10 upper-footer">
          <Link data-v-2b4e1d6e="" to="/ResponsibleGambling"   className="theme1font">
          Responsible Gambling
        </Link> |
          <Link data-v-2b4e1d6e="" to="home"   className="theme1font" onClick={() => handleProhibited("Prohibited")} role="button">Prohibited Territories</Link> |
          <Link data-v-2b4e1d6e="" to="https://www.gamcare.org.uk/" target="blank"><img data-v-2b4e1d6e="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/rules/gamecare.svg"   className="gamecare" alt='' /></Link> |
          <Link data-v-2b4e1d6e="" to="https://www.begambleaware.org/" target="blank"><img data-v-2b4e1d6e="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/rules/begambleaware.png"   className="begambleaware" alt='' /></Link> |
          <Link data-v-2b4e1d6e="" to="https://www.gamstop.co.uk/" target="blank"><img data-v-2b4e1d6e="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/rules/gamstop.svg"   className="gamstop" alt='' /></Link> |
          <Link data-v-2b4e1d6e="" to="/home" role="button" onClick={() => handleProhibited("plus18")} ><img data-v-2b4e1d6e="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/rules/18plus.png"   className="plus18" alt='' /></Link>
        </p>
        <div data-v-2b4e1d6e=""   className="m-b-0 text-center d-inline-block">
          <Link data-v-2b4e1d6e="" to="/home" data-toggle="modal" data-target="#rules" onClick={() => setTrueee(true)}> <span data-v-2b4e1d6e="">Rules &amp; Regulations</span></Link> <span data-v-2b4e1d6e="">© 2016-2020</span>
          <div data-v-2b4e1d6e=""   className="powered-by"><span data-v-2b4e1d6e="">Powered By</span> <img data-v-2b4e1d6e="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/front/images/powered-by.png" alt='' /> </div>
        </div>

      </footer>


      <Modal show={show} onHide={handleClose} style={{ backgroundColor: "black" }}>
      <div   className='eighteen-plus'>
        <Modal.Header closeButton>
          <Modal.Title>
          {plus18 ? 
          "18+(underage gambling)"

            :
            "Prohibited Territories"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {plus18 ? 

<>
     <p>   Over 18s only
</p>
<p>
        It is an offence for anyone under the age of 18 to open an account or to gamble on our exchange. 
        We take its age-verification responsibilities very seriously.
         We carry out age-verification checks on all customers who use payment mechanisms which are 
         available to under 18s and additionally perform random age-verification checks on customers
          using other forms of funding mechanisms. We may ask for information to verify your age and 
          could restrict or suspend your account until your age is confirmed.
        </p><p>
        PLEASE NOTE THAT ANYONE UNDER THE AGE OF 18 YEARS OLD FOUND TO BE USING THIS SITE WILL HAVE
         ANY WINNINGS FORFEITED AND MAY ALSO BE REPORTED TO THE POLICE.</p>
         </>
          :
          <>
          <p>
            The right to prohibit betting on the Website by customers, whether acting alone,
             in a syndicate or via an AGENT or Sub-agent, where such customers are residing in Prohibited Jurisdictions.
              As of the Commencement Date, the following are Prohibited Jurisdictions:

          </p>
          <p>
            Algeria, Australia, Austria, Bulgaria, Canada, Cyprus, the Czech Republic, Democratic People’s Republic of Korea,
             Denmark, Europe, France (and French territories), Germany, Gibraltar, Iran, Iraq, Ireland, Italy,
              Malta, Myanmar, New Zealand, Poland, Portugal, Qatar, Romania, Singapore, South Africa, Spain, Turkey,
               the United Kingdom,the United States of America and its territories,
             and any other territories that Betfair may notify the operator

          </p>
          </>
          }
        

        </Modal.Body>
        </div>

      </Modal>


      <Modal
        show={trueee}
        onHide={() => setTrueee(false)}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
         THE SITE RULES AND REGULATIONS

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Rulesandregulation/>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Footer