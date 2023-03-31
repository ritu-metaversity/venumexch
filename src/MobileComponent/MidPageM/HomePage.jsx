import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useOutletContext } from 'react-router';
import {Link, useParams } from "react-router-dom";
import { Postactivematchsport, PostGameDetailsBySportsId, Postunsettleddddd } from '../../App/Features/auth/authActions';
import './HomePage.css'

const HomePage = () => {
  const datatata = useOutletContext()
const {state} = useLocation()
let navigate = useNavigate();
const { id } = useParams();
let GameName = state?.id2
const dispatch = useDispatch();
// console.log(id,"hellooooooooo")
const [gamesData, setGamesData] = useState("");
const token = localStorage.getItem("TokenId");
// const { PostGamesById } = useSelector(state => state.auth)
// console.log(PostGamesById,"Dushyant")
const { Postmatchsport } = useSelector((state) => state.auth);

// useEffect(()=>{
//   console.log("log")
//   axios.post("http://api.a2zscore.com/admin-new-apis/enduser/active-match-sport-wise-open",{sportId:"4"})
//   .then((response) => {
//     console.log(response.data,"gammmmmmmiddddidididiidididididididididdii");
//   })
// },[])
// console.log
const handleGameDetails=(id,item)=>{
  // console.log("home page load ")
  // console.log(item?.openDate)
 let data= {
  matchName:item?.matchName,
  openDate:item?.openDate,
  Odds:""
 } 
 
      datatata(data)
 navigate(`/m/gamedetail/${id}`)
}

    const handleInput = (vl) => {
      // console.log("das")

      // datatata(vl)
      };

      useEffect(() => {
        
        const activeMatchSportWise = id? id :"4" 

        // dispatch(PostGameDetailsBySportsId(activeMatchSportWise))
        axios
          .get(
           ` http://43.205.50.127:9000/betfair_api/active_match/${activeMatchSportWise}`
          )
          .then((res) => {
            setGamesData(res?.data?.data);
            // console.log(res?.data)
            // console.log(res?.data?.data)
          });
      }, [dispatch, id, token]);
      // console.log(gamesData)

//       useEffect(()=>{
//         let data = {sportId: id?id:"4"}
// dispatch(Postactivematchsport(data))
//       },[dispatch, id])



const { PostunsettledData } = useSelector(state => state.auth)

  // console.log(PostunsettledData?.data?.dataList?.length)

  // const dispatch = useDispatch();
// console.log(PostBetListByMatchIdData ,"dushyant")

useEffect(()=>{
  let data ={betType:1,
    index:0,
    noOfRecords:5,
    sportType:1}

  dispatch(Postunsettleddddd(data))
},[dispatch])

  return (
    <> <div   className="master-flash-message">
    <div   className="flash__wrapper"></div>
  </div>
  {/* {gamesData?.length > 0 ? */}
            
  
  <section style={{marginTop:"-14px"}}>
  <h2 class="page-title p-l-15" style={{marginTop: "10px"}}>{GameName}</h2>
    <div   className="in-play page-title m-t-20 m-l-15" style={{paddingTop: "0px"}}>
      <i   className="fas fa-play-circle"></i>{""}
      <span   className="label">In Play</span>
    </div>
    <Link to="/m/mybets"  className="">
      <span   className="open-bets-link">Open Bets {""}({PostunsettledData?.data&&PostunsettledData?.data?.dataList&&PostunsettledData?.data?.dataList?.length})</span>
    </Link>
    <div>
      <ul   className="market-listing m-t-10">
        {/* <li   className="market-list-item">
          <Link   className="">
            <div   className="item-inner">
              <img
                src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/cricket.png"
                alt=""
              />{" "}
              <span   className="m-l-10 game-name v-m">
                Zimbabwe v West Indies
              </span>
              <div   className="events-icons float-right">
                <i   className="fas fa-tv"></i>{" "}
                <i   className="fas fa-play-circle m-l-5"></i>
              </div>
            </div>
            <div   className="event-info">
              <p>12/02/2023 13:30</p>
            </div>
          </Link>
          <div   className="market-list-odds">
            <div>
              <div   className=" m-b-10 main-market">
                <div   className="table-body">
                  <div   className="table-row disk-view">
                    <div   className="float-left box-w4 country-name">
                      <span   className="team-name">
                        <b>Zimbabwe </b>
                      </span>
                      <p   className="box-w4">
                        <span   className="float-left ubook">0</span>
                      </p>
                    </div>
                    <div   className="box-w1 back float-left dis-none">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 back float-left dis-none">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 back float-left">
                      <button   className="blink back" onClick={() => handleInput("130",)}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left dis-none">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left dis-none">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    
                    
                  </div>
                  
                  <div   className="table-row mobile-view">
                      <div   className="float-left box-w4 country-name">
                        <span   className="team-name">
                          <b>Scotland </b>
                        </span>
                        <p   className="box-w4">
                          <span   className="float-left ubook">0</span>
                        </p>
                      </div>
                      <div   className="box-w1 back float-left dis-none">
                        <button   className="blink back" onClick={() => handleInput("1.87")}>
                          <span   className="odd" >1.87</span>
                          <span>
                            <span>75K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 back float-left dis-none">
                        <button   className="blink back" onClick={() => handleInput("1.87")}>
                          <span   className="odd" >1.87</span>
                          <span>
                            <span>75K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 back float-left">
                        <button   className="blink back" onClick={() => handleInput("1.87")}>
                          <span   className="odd" >1.87</span>
                          <span>
                            <span>75K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 lay float-left highlighted">
                        <button   className="lay" onClick={() => handleInput("1.88")}>
                          <span   className="odd">1.88</span>
                          <span>
                            <span>13.2K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 lay float-left highlighted dis-none">
                        <button   className="lay" onClick={() => handleInput("1.88")}>
                          <span   className="odd">1.88</span>
                          <span>
                            <span>13.2K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 lay float-left highlighted dis-none">
                        <button   className="lay" onClick={() => handleInput("1.88")}>
                          <span   className="odd">1.88</span>
                          <span>
                            <span>13.2K</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div   className="table-row disk-view">
                    <div   className="float-left box-w4 country-name">
                      <span   className="team-name">
                        <b>The Draw</b>
                      </span>
                      <p   className="box-w4">
                        <span   className="float-left ubook">0</span>
                      </p>
                    </div>
                    <div   className="box-w1 back float-left dis-none">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 back float-left dis-none">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 back float-left">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left dis-none">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left dis-none">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </li> */}
        {/* <li   className="market-list-item">
          <Link   className="">
            <div   className="item-inner">
              <img
                src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/cricket.png"
                alt=""
              />{" "}
              <span   className="m-l-10 game-name v-m">
                Zimbabwe v West Indies
              </span>
              <div   className="events-icons float-right">
                <i   className="fas fa-tv"></i>{" "}
                <i   className="fas fa-play-circle m-l-5"></i>
              </div>
            </div>
            <div   className="event-info">
              <p>12/02/2023 13:30</p>
            </div>
          </Link>
          <div   className="market-list-odds">
            <div>
              <div   className=" m-b-10 main-market">
                <div   className="table-body">
                  <div   className="table-row disk-view">
                    <div   className="float-left box-w4 country-name">
                      <span   className="team-name">
                        <b>West Indies </b>
                      </span>
                      <p   className="box-w4">
                        <span   className="float-left ubook">0</span>
                      </p>
                    </div>
                    <div   className="box-w1 back float-left dis-none">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 back float-left dis-none">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 back float-left">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left dis-none">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left dis-none">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    
                    
                  </div>
                  <div   className="table-row disk-view">
                    <div   className="float-left box-w4 country-name">
                      <span   className="team-name">
                        <b>Zimbabwe </b>
                      </span>
                      <p   className="box-w4">
                        <span   className="float-left ubook">0</span>
                      </p>
                    </div>
                    <div   className="box-w1 back float-left dis-none">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 back float-left dis-none">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 back float-left">
                      <button   className="blink back" onClick={() => handleInput("130")}>
                        <span
                            className="odd"
                          
                        >
                          130
                        </span>
                        <span>
                          <span> 3.5K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left dis-none">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    <div   className="box-w1 lay float-left dis-none">
                      <button   className="lay">
                        <span   className="odd">140</span>
                        <span>
                          <span>5.7K</span>
                        </span>
                      </button>
                    </div>
                    
                    
                  </div>
                  <div   className="table-row mobile-view">
                      <div   className="float-left box-w4 country-name">
                        <span   className="team-name">
                          <b>The Draw</b>
                        </span>
                        <p   className="box-w4">
                          <span   className="float-left ubook">0</span>
                        </p>
                      </div>
                      <div   className="box-w1 back float-left dis-none">
                        <button   className="blink back" onClick={() => handleInput("1.87")}>
                          <span   className="odd" >1.87</span>
                          <span>
                            <span>75K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 back float-left dis-none">
                        <button   className="blink back" onClick={() => handleInput("1.87")}>
                          <span   className="odd" >1.87</span>
                          <span>
                            <span>75K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 back float-left">
                        <button   className="blink back" onClick={() => handleInput("1.87")}>
                          <span   className="odd" >1.87</span>
                          <span>
                            <span>75K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 lay float-left highlighted">
                        <button   className="lay" onClick={() => handleInput("1.88")}>
                          <span   className="odd">1.88</span>
                          <span>
                            <span>13.2K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 lay float-left highlighted dis-none">
                        <button   className="lay" onClick={() => handleInput("1.88")}>
                          <span   className="odd">1.88</span>
                          <span>
                            <span>13.2K</span>
                          </span>
                        </button>
                      </div>
                      <div   className="box-w1 lay float-left highlighted dis-none">
                        <button   className="lay" onClick={() => handleInput("1.88")}>
                          <span   className="odd">1.88</span>
                          <span>
                            <span>13.2K</span>
                          </span>
                        </button>
                      </div>
                    </div>
                </div>
              </div>
            </div>

           
          </div>
        </li> */}
        {/* <li   className="market-list-item">
          <Link    className="">
            <div   className="item-inner">
              <img
                src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/tennis.png"
                alt=""
              />{" "}
              <span   className="m-l-10 game-name v-m">
                Kvitova v S Zhang
              </span>
              <div   className="events-icons float-right">
                <i   className="fas fa-tv"></i>{" "}
                <i   className="fas fa-play-circle m-l-5"></i>
              </div>
            </div>
            <div   className="event-info">
              <p>14/02/2023 16:30</p>
            </div>
          </Link>
        </li> */}
        {/* <li   className="market-list-item">
          <Link    className="">
            <div   className="item-inner">
              <img
                src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/tennis.png"
                alt=""
              />{" "}
              <span   className="m-l-10 game-name v-m">
                V Pospisil v Moraing
              </span>
              <div   className="events-icons float-right">
                <i   className="fas fa-tv"></i>{" "}
                <i   className="fas fa-play-circle m-l-5"></i>
              </div>
            </div>
            <div   className="event-info">
              <p>14/02/2023 16:30</p>
            </div>
          </Link>
        </li> */}
        {/* <li   className="market-list-item" onClick={()=>handleGameDetails("123123")} >
          <Link className="" >
            <div   className="item-inner">
              <img
                src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/football.png"
                alt=""
              />{" "}
              <span   className="m-l-10 game-name v-m" >
                Nam Dinh v Hoang Anh Gia Lai
              </span>
              <div   className="events-icons float-right">
                <i   className="fas fa-tv"></i>{" "}
                <i   className="fas fa-play-circle m-l-5"></i>
              </div>
            </div>
            <div   className="event-info">
              <p>14/02/2023 16:30</p>
            </div>
          </Link>
        </li> */}
     
         {gamesData?.length > 0
          ? gamesData.map((item) => {
            return (
        <li   className="market-list-item" style={{    padding: "2px"        }} >
            <div   className="item-inner">
              
              <span   className="m-l-10 game-name v-m"onClick={()=>handleGameDetails(item?.matchId,item)} >
               {item?.matchName}
              </span>
              <div className='timeeeee'>{item?.openDate}</div>
              <div   className="events-icons float-right">
                {/* <i   className="fas fa-tv"></i>{" "} */}
                {item?.inPlay===true ?<i   className="fas fa-play-circle m-l-5"></i>
                :""
              }
                
              </div>
            </div>
        </li>)})
        :""}
      </ul>
    </div>
  </section>
{/* : */}

  {/* <section   className="m-t-10 m-b-20">
    <h2   className="page-title p-l-15">Most Popular</h2>
    <div   className="market-listing m-t-10 text-center">
      You have no most popular matches
    </div>
  </section> */}
  
{/* } */}
</>
  )
}

export default HomePage