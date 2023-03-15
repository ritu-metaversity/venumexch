import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Postcasino } from '../../App/Features/auth/authActions'
import "./CasinoList.css"
const Casinolist = () => {
    const { PostcasinoData } = useSelector(state => state.auth)

    // console.log(PostunsettledData?.data?.dataList)
  
    const dispatch = useDispatch();
  console.log(PostcasinoData ,"dushyant")
  
  useEffect(()=>{
    // let data ={betType:1,
    //   index:0,
    //   noOfRecords:5,
    //   sportType:1}
  
    dispatch(Postcasino())
  },[dispatch])
  
const handleButton=(item)=>{
// dispatch()
console.log(item)
}

  return (
    <>
    <div className='buttttt'>
    {PostcasinoData?.data &&
        PostcasinoData?.data ? (
            PostcasinoData?.data.map((el) => (
                <div className='CasinolButton'>
<button onClick={()=>handleButton(el?.id)}>
    <img alt="" src={`${el?.logo}`}/>
{el?.name}
</button>
</div>
            ))):""}

    <div>
        <section data-v-6a7f44cc="" className="m-t-10 ">
    <div data-v-6a7f44cc="" className="container-fluid">
       <h2 data-v-6a7f44cc="" className="page-title text-center m-t-10">Live Casino</h2>
       <div data-v-6a7f44cc="" className="row row5" >
          <div data-v-6a7f44cc="" className="col-4 m-b-10">
             <div data-v-6a7f44cc="" className="events ">
                <div data-v-6a7f44cc="" className="events-row text-center">
                   <div data-v-6a7f44cc="" className="d-inline-block "><Link data-v-6a7f44cc="" to="/m/casino/race20" className=""><img data-v-6a7f44cc="" src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/casino/race20.jpg" className="img-fluid"/></Link></div>
                </div>
             </div>
          </div>
 
       </div>
    </div>
 </section>
 </div>
 </div>

 </>
  )
}

export default Casinolist