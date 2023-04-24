import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postunsettleddddd } from "../../App/Features/auth/authActions";
import "./MarketPage.css";

const MarketPage = () => {
  // console.log("mymarkets")

  const { PostunsettledData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [myMarket, setMyMarket] = useState([]);

  useEffect(() => {
    let data = { betType: 1, index: 0, noOfRecords: 5, sportType: 1 };

    dispatch(Postunsettleddddd(data));
  }, [dispatch]);
  //   console.log(
  //     PostunsettledData?.data?.dataList,
  //     "PostunsettlPostunsettledDataedData"
  //   );

  useEffect(() => {
    const neenee = {};
    const nee = [];

    if (PostunsettledData?.data && PostunsettledData?.data?.dataList) {
      PostunsettledData?.data &&
        PostunsettledData?.data?.dataList.forEach((item) => {
          if (!neenee[item.eventName]) {
            neenee[item.eventName] = item;
            nee.push(item);
          }
        });
    }
    setMyMarket(nee);
    //  console.log(nee, "neeneeneenee");
  }, [PostunsettledData?.data]);

  //   console.log(myMarket, "myMarketmyMarketmyMarket");

  return (
    <div class="container-inner" style={{ marginTop: "80px", height: "81vh" }}>
      <section class="m-t-10">
        <h4 class="page-title p-l-15">My Markets</h4>
        <ul class="market-listing m-t-10">
          {myMarket &&
            myMarket.map((item) => {
              return (
                <li class="market-list-item" style={{ marginTop: "12px" }}>
                  {console.log(item, "myMarketmyMarketmyMarket")}
                  <a href={`/m/gamedetail/${item?.matchId}`} class="">
                    <div class="item-inner">
                      <img
                        src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${item?.eventType}.png`}
                        alt="market-images"
                      />{" "}
                      <span
                        class="m-l-10 game-name v-m"
                        style={{ color: "black" }}
                      >
                        {item?.eventName}
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};

export default MarketPage;
