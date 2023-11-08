import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Upcoming = () => {
    let navigate = useNavigate();
    const [gamesData, setGamesData] = useState("");

    const handleGameDetails = (id, item,sportId) => {

        const token = localStorage.getItem("TokenId");

        if (token) {


            // let data = {
            //     matchName: item?.matchName,
            //     openDate: item?.openDate,
            //     Odds: "",
            // };
            navigate(`/m/gamedetail/${id}`)
        } else {
            navigate(`/m/login`)

        }
    localStorage.setItem("SportId", sportId);

    };

    useEffect(() => {
        // if (token) {
        // 


        axios
            .get("https://oddsapi.247idhub.com/betfair_api/active_match/v2/All")
            .then((res) => {

                console.log(res?.data?.data, "sdfiwgyuvjhbnwi")

                setGamesData(res?.data?.data);

            });


        // }
    }, []);
    const handleHomeBet = () => {
    }
    return (
        <div class="" style={{ marginTop: "2px" }}>
            {gamesData && gamesData?.length > 0 ? (
                Object.keys(gamesData).map((key, item) => (
                    gamesData && gamesData[key] && gamesData[key]?.matchList.map((item, index) => item.inPlay === false && (
                        <div className="main_card_for_homepage">
                            <div className="inner_card_for_homepage1">
                                <div className="gamename_card_img_inplay" style={{ width: "10%" }}>

                                    <img className="card_logo_homePage" src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${gamesData[key]?.sportid}.png`} alt="das" />
                                </div>

                                <div className="card_Name_Date_homepage" onClick={() => handleGameDetails(item?.matchId, item, gamesData[key] && gamesData[key]?.sportid)}>
                                    <div className="card_Name_homepage">{item?.matchName}</div>
                                    <div className="card_Date_homepage"> {item?.openDate}</div>
                                </div>


                            </div>

                            {item?.runners?.map((item1, index) => {
                                return (
                                    <>
                                        <div className="inner_card_for_homepage2"
                                            style={{ borderBottom: "1px solid #f2f2f2" }}>
                                            <div className="inner_card_nameAndpnl_homepage">
                                                <span className="game_name_btxi">{item1?.runnerName}</span>

                                            </div>

                                            <div className="inner_card_rate_homepage">

                                                <div className="inner_card_back mobile_to_desktop_view_block mainnnnnn blurrrrrrr_back" >
                                                    <span className="oddddddssss">{item1?.back3}</span>
                                                </div>
                                                <div className="inner_card_back mobile_to_desktop_view_block mainnnnnn blurrrrrrr_back">
                                                    <span className="oddddddssss">{item1?.back2}</span>
                                                </div>
                                                <div className="inner_card_back mainnnnnn">
                                                    <span className="oddddddssss" onClick={() => handleHomeBet(item1, "back", item?.matchName, item?.matchId, item1?.back1, item1?.selectionId, item?.marketId)}>{item1?.back1}</span>
                                                </div>
                                                <div className="inner_card_lay mainnnnnn">
                                                    <span className="oddddddssss" onClick={() => handleHomeBet(item1, "lay", item?.matchName, item?.matchId, item1?.lay1, item1?.selectionId, item?.marketId)}>{item1?.lay1}</span>

                                                </div>
                                                <div className="inner_card_lay mobile_to_desktop_view_block mainnnnnn blurrrrrrr_lay">
                                                    <span className="oddddddssss">{item1?.lay2}</span>

                                                </div>
                                                <div className="inner_card_lay mobile_to_desktop_view_block mainnnnnn blurrrrrrr_lay">
                                                    <span className="oddddddssss">{item1?.lay3}</span>

                                                </div>
                                            </div>
                                        </div>

                                    </>)
                            })}

                        </div>))
                ))) : (

                <div className="noLiveMatch">No live match now</div>
            )}


        </div >
    )
}

export default Upcoming