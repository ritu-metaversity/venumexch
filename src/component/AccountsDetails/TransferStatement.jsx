import React from 'react'
import SideBar from '../SideBar/SideBar'

const TransferStatement = () => {
  return (
    <div   className="content boxed-layout-wrapper" >
    <div className='wid-100'>
   <h1 className='betHeading pnlHeading'>Transfer Statement</h1>
   <div   className="table-responsive">
      <table   className="table profit-loss-table">
         <thead>
            <tr>
               <th>Date</th>
               <th>Discription</th>
               <th   className="text-right">Amount</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td colspan="3"   className="text-center">There Have Been No Transfers In The Last 180 Days.</td>
            </tr>
         </tbody>
      </table>
   </div>
</div>
    </div>
  )
}

export default TransferStatement