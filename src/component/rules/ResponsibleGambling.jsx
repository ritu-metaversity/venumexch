import React from 'react'
import "./ResponsibleGambling.css"


const ResponsibleGambling = () => {

   return (
      <div className='container-fluid main-res'>
      <div className="row">
         <div className="col-12">
            <h3 className="m-t-20">Responsible Gambling</h3>
            <h4 >Understanding difficulties with gambling</h4>
            <p >On this site you will find practical points about maintaining control of your gambling. There is also
               a self-assessment questionnaire which can be used to help identify possible difficulties with
               gambling if you are concerned about your own or somebody else's gambling.
            </p>
            <h5 >Symptom Assessment:</h5>
            <ul >
               <li >Did you ever lose time from work due to gambling?</li>
               <li >Has gambling ever made your home life unhappy?</li>
               <li >Have you ever spent more money on gambling than you originally intended?</li>
               <li >Did you ever argue about gambling with family and friends?</li>
               <li >After losing, did you feel the urge to return as soon as possible to win back your losses?</li>
               <li >Did you ever feel guilty about gambling?</li>
               <li >Have you ever sold anything to finance your gambling?</li>
               <li >Did you ever borrow money to finance your gambling?</li>
               <li >Did you ever consider obtaining money illegally to finance your gambling?</li>
               <li >Have you ever risked or lost a relationship due to gambling?</li>
            </ul>
            <h4 className="m-t-20">Tools that you can use</h4>
            <p >We offer a range of different options that can be used to manage gambling activity as and when you
               wish. This includes tools which allow you to limit the amount you can deposit or lose, or the option
               to exclude yourself from gambling for a fixed period of time.
            </p>
            <h4 className="m-t-20">Support and help information</h4>
            <p >If you feel you need further guidance and support about money worries, personal or emotional
               circumstances, keeping control of your gambling or concerns over a friend/family member there are a
               number of support organizations available. Here are a few where you will find the details of both UK
               and global organizations and the contact information for them.
            </p>
            <ul >
               <li ><a href="http://www.gamblersanonymous.org/">Gamblers Anonymous</a></li>
               <li ><a href="http://www.gamcare.org.uk/">GamCare</a></li>
               <li ><a href="http://www.responsiblegambling.org/">The Canadian Foundation on Compulsive Gambling</a></li>
            </ul>
         </div>
      </div>
      </div>
   )
}

export default ResponsibleGambling