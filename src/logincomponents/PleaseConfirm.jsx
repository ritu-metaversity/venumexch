import React from 'react'
import "./PleaseConfirm.css"

const PleaseConfirm = () => {
    const handle = ()=>{
        
    }
  return (


    <div><div id="__BVID__283" role="dialog" tabindex="-1" aria-labelledby="__BVID__283___BV_modal_title_" aria-describedby="__BVID__283___BV_modal_body_"   className="modal fade show" aria-modal="true" style={{display: "block"}}>
    <div   className="modal-dialog modal-sm modal-dialog-centered">
       <div role="document" id="__BVID__283___BV_modal_content_"   className="modal-content">
          <header id="__BVID__283___BV_modal_header_"   className="modal-header">
             <h5 id="__BVID__283___BV_modal_title_"   className="modal-title">Please Confirm</h5>
         
          </header>
          <div id="__BVID__283___BV_modal_body_"   className="modal-body">Underage gambling is prohibited. Please confirm if you are 18 years old and above as of today</div>
          <footer id="__BVID__283___BV_modal_footer_"   className="modal-footer p-2">
            <button type="button"   className="btn btn-danger btn-sm" onClick={handle}>Exit</button>
           <button type="button"   className="btn btn-info btn-sm"onClick={handle} >Confirm</button>
          </footer>
       </div>
    </div>
 </div></div>
  )
}

export default PleaseConfirm