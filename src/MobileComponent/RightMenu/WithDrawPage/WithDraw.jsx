import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postselfwithdrawapp, Postwithdrawrequestclient } from "../../../App/Features/auth/authActions";
import './WithDraw.css'

const WithDraw = () => {
  const dispatch = useDispatch();
  const { PostselfwithdrawappData ,PostwithdrawrequestclientData} = useSelector((state) => state.auth);
  const [Bitvalue, setBitValue] = useState("");
  const [amount, setAmount]=useState();
  const [accountHolderName, setAccountHolderName]= useState("")
  const [accountType, setAccountType] = useState("Saving");
  const [accountNumber, setAccountNumber]= useState();
  const [bankName, setBankName]=useState("");
  const [ifsc, setIfsc]=useState();

  const handleClick = ()=>{
    console.log(amount, accountHolderName, accountType, accountNumber, bankName, ifsc);
    let accountDetails={
    "accountHolderName":accountHolderName,
    "bankName":bankName,
    "accountType":accountType,
    "accountNumber":accountNumber,
    "ifsc":ifsc,
    "amount":amount
  }

    dispatch(Postselfwithdrawapp(accountDetails));
  }

  useEffect(()=>{
if(PostselfwithdrawappData?.message==="Withdraw Request Submited Successfully"){
  dispatch(Postwithdrawrequestclient())
}
  },[PostselfwithdrawappData?.message])

  // useEffect(() => {
  //   let accountDetails={
  //     "accountHolderName":"adsfa",
  //   "bankName":"bbb",
  //   "accountType":"ssssss",
  //   "accountNumber":"2345234234",
  //   "ifsc":"iiifsd","amount":"1000"}
  //   dispatch(Postselfwithdrawapp(accountDetails));
  // }, []);

  useEffect(()=>{
    dispatch(Postwithdrawrequestclient())
  },[])

  console.log(PostselfwithdrawappData,"post datatata")
  console.log(PostwithdrawrequestclientData,"gett  dataatatatat ")

 

  return (
  <>
     
      <div className="wrapper">
        <div className="card-body container-fluid container-fluid-5">
          <div className="main-account-containor">
            <div className="mx-input-wrapper account-field">
              <label className="account-lable">Amount</label>
              <br />
              <input type="number"className="account-input" onChange={(e)=>setAmount(e.target.value)}/>
            </div>
        
            <div className="mx-input-wrapper account-field">
              <label className="account-lable">Account Number</label>
              <br />
              <input type="number" className="account-input" onChange={(e)=>setAccountNumber(e.target.value)}/>
            </div>
            <div className="mx-input-wrapper account-field">
              <label className="account-lable">Account Name</label>
              <br />
              <input type="text" className="account-input" onChange={(e)=>setAccountHolderName(e.target.value)}/>
            </div>
            <div className="mx-input-wrapper account-field">
              <label className="account-lable">Bank Name</label>
              <br />
              <input type="type" className="account-input" onChange={(e)=>setBankName(e.target.value)}/>
            </div>
            <div className="mx-input-wrapper account-field">
              <label className="account-lable">IFSC</label>
              <br />
              <input type="type" className="account-input" onChange={(e)=>setIfsc(e.target.value)}/>
            </div>
            <div className="mx-input-wrapper account-field">
              <label className="account-lable">Account Type</label>
              <br />
              <select name="reportType" onChange={(e)=>setAccountType(e.target.value)} className="custom-select" >
                  <option value="Saving1">Saving</option>
                  <option value="Current">Current</option>
                </select>
            </div>
            <div className="mx-input-wrapper account-field">
            <button className="btn btn-primary btn-block btn-sm" style={{marginTop: "20px"}} onClick={handleClick} >
                Submit
              </button>
            </div>
          </div>
          <div className="row row5 mt-2">
            <div className="col-12">
              <div className="table-responsive">
                <table
                  role="table"
                  aria-busy="false"
                  aria-colcount="6"
                  className="table b-table table-bordered"
                  id="__BVID__104">
                  <thead>
                    <tr role="row" className="account-detail">
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="1"
                        className="text-left">
                        Account Number
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="2"
                        className="text-left">
                        Account Name
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="3"
                        className="text-right">
                        Amount
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="4"
                        className="text-left">
                        Bank Name/ Address
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="5"
                        className="text-left">
                        IFSC Code
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="6"
                        className="text-left">
                        Account Type / Currency
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="6"
                        className="text-left withdraw-data">
                        Date
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="6"
                        className="text-left">
                        Remark
                      </th>
                      <th
                        role="columnheader"
                        scope="col"
                        aria-colindex="6"
                        className="text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {PostwithdrawrequestclientData&&PostwithdrawrequestclientData?.data.map((item)=>(
                      <tr role="row">
                      <td aria-colindex="1" className="text-left withdraw-data">
                      {item?.accountNumber}
                      </td>
                      <td aria-colindex="2" className="text-left withdraw-data">
                      {item?.accountHolderName}
                      </td>
                      <td aria-colindex="3" className="text-right withdraw-data ">
                      {item?.amount}
                      </td>
                      <td aria-colindex="4" className="text-left withdraw-data ">
                      {item?.bankName
}
                      </td>
                      <td aria-colindex="5" className="text-left withdraw-data ">
                      {item?.ifsc}
                      </td>
                      <td aria-colindex="6" className="text-lift withdraw-data">
                      {item?.accountType}
                      </td>
                      <td aria-colindex="6" className="text-lift">
                    {moment(item?.time).format("MM DD YYYY - HH MM ")} 
                      </td>
                      <td aria-colindex="6" className="text-lift withdraw-data">
                      {item?.remark}
                      </td>
                      <td aria-colindex="6" className="text-lift withdraw-data">
                      {item?.status}
                      </td>
                    </tr>
                    ))}
                  </tbody>
               
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
)
};



export default WithDraw;
