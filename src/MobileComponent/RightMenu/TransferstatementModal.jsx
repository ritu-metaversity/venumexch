import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBetMarketAndUser } from "../../App/Features/auth/authActions";
import "./TransferstatementModal.css";

const TransferstatementModal = ({ matchId }) => {
  const [betValue, setBetValue] = useState(1);
  const [betListData, setBetListData] = useState();
  const dispatch = useDispatch();
  // console.log(matchId);
  const userId = localStorage.getItem("userId");

  const { postBetMarketAndUserData } = useSelector((state) => state.auth);

  const [selectBet, setSelectBet] = useState("1");
  const handleSelectType = (vl) => {
    setSelectBet(vl);

  };

  useEffect(() => {
    let data = {
      marketId: matchId?.matchid,
      userId: userId,
      betType: selectBet,
    };
    dispatch(postBetMarketAndUser(data));
  }, [userId, matchId, selectBet]);
  // console.log(
  //   postBetMarketAndUserData?.data,
  //   "postBetMarketAndUserDatapostBetMarketAndUserData"
  // );
  // betList

  // console.log(
  //   postBetMarketAndUserData?.data?.totalBets,
  //   "postBetMarketAndUserData"
  // );
  // console.log(
  //   postBetMarketAndUserData?.data?.totalStake,
  //   "postBetMarketAndUserData"
  // );
  return (
    <div>
      <div id="__BVID__287___BV_modal_body_">
        <div>
          <div className={`place-bet pt-2 pb-2`}>
            <div className={`container-fluid container-fluid-5`}>
              <div className="row row5 reamrk-main">
                <div className="col-12 remark-name">{matchId.remark}</div>
                <div className="row row5 mt-2" style={{ marginInline: "-7px" }}>
                  <div className="col-6">
                    <div
                      className="form-group mb-0"
                      style={{ marginTop: "12px", marginLeft: "27px" }}
                    >
                      <div
                        id="match_unmatched_delete"
                        role="radiogroup"
                        tabIndex="-1"
                      >
                        <div
                          className="col-4 custom-control custom-control-inline custom-radio p-l"
                        // onChange={() => handleSelectType("all")}
                        >
                          <input
                            id="all"
                            type="radio"
                            className="custom-control-input"
                            checked={selectBet === "1" ? true : false}
                            onChange={() => handleSelectType("1")}
                          />
                          <label
                            htmlFor="all"
                            onChange={() => handleSelectType("1")}

                            className="custom-control-label control-label1"
                          >
                            <span>All</span>
                          </label>
                        </div>
                        <div className="col-4 custom-control custom-control-inline custom-radio p-l ">
                          <input
                            id="Back"
                            type="radio"
                            checked={selectBet === "2" ? true : false}
                            className="custom-control-input"
                            onChange={() => handleSelectType("2")}
                          />
                          <label
                            htmlFor="Back"
                            onChange={() => handleSelectType("2")}

                            className="custom-control-label control-label1"
                          >
                            <span>Back</span>
                          </label>
                        </div>
                        <div className=" col-4 custom-control custom-control-inline custom-radio p-l">
                          <input
                            id="Lay"
                            type="radio"
                            checked={selectBet === "3" ? true : false}
                            className="custom-control-input"
                            onChange={() => handleSelectType("3")}
                          />
                          {/* <input type="radio"/> */}
                          <label
                            htmlFor="Lay"
                            onChange={() => handleSelectType("3")}

                            className="custom-control-label control-label1"
                          >
                            <span>Lay</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stack-value">
                      <div className="col-6">
                        <p>
                          Total Stake:{" "}
                          <span className="cback">
                            {postBetMarketAndUserData?.data?.totalStake}
                          </span>
                        </p>
                      </div>
                      <div className="col-6">
                        <p>
                          Total Bets:{" "}
                          <span className="cback">
                            {postBetMarketAndUserData?.data?.totalBets}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row5 mt-2">
                  <div className="col-12">
                    <div className="table-responsive account-list">
                      <table
                        role="table"
                        aria-busy="false"
                        aria-colcount="6"
                        className="table b-table"
                        id="__BVID__104"
                      >
                        <thead>
                          <tr role="row" className="s-table">
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="2"
                              className="text-left"
                            >
                              Nation
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="1"
                              className="text-left"
                            >
                              Rate
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="1"
                              className="text-left"
                            >
                              Amount
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="1"
                              className="text-left"
                            >
                              Win
                            </th>
                            <th
                              role="columnheader"
                              scope="col"
                              aria-colindex="1"
                              className="text-left"
                            >
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {betListData?.betList?.map((item) => {
                            return (
                              <tr
                                role="row"
                                className={`bet-details ${
                                  item.isback === true ? "back" : "lay"
                                } `}
                              >
                                <td className="text-left">{item.marketname}</td>
                                <td className="text-left">{item.odds}</td>
                                <td className="text-left ">{item.stack}</td>
                                <td className="text-left">
                                  {parseFloat(item.netpnl).toFixed(2)}
                                </td>
                                <td className="text-left">
                                  {item.matchedtime}
                                </td>
                                
                              </tr>
                            );
                          })} */}

                          {postBetMarketAndUserData?.data?.betList.length ? (
                            postBetMarketAndUserData?.data?.betList.map(
                              (item) => {
                                return (
                                  <tr
                                    role="row"
                                    className="s-table"
                                    style={{
                                      color:
                                        item?.isback === true
                                          ? "#2587d0"
                                          : "#ff6699",
                                    }}
                                  >
                                    <td
                                      role="columnheader"
                                      scope="col"
                                      aria-colindex="2"
                                      className="text-left"
                                    >
                                      {item?.marketname}
                                    </td>
                                    <td
                                      role="columnheader"
                                      scope="col"
                                      aria-colindex="1"
                                      className="text-left"
                                    >
                                      {item?.odds}
                                    </td>
                                    <td
                                      role="columnheader"
                                      scope="col"
                                      aria-colindex="1"
                                      className="text-left"
                                    >
                                      {item?.stack}
                                    </td>
                                    <td
                                      role="columnheader"
                                      scope="col"
                                      aria-colindex="1"
                                      className="text-left"
                                    >
                                      {item?.netpnl}
                                    </td>
                                    <td
                                      role="columnheader"
                                      scope="col"
                                      aria-colindex="1"
                                      className="text-left"
                                    >
                                      {item?.matchedtime}
                                    </td>
                                  </tr>
                                );
                              }
                            )
                          ) : (
                            <p style={{ color: "red" }}>No Data Found</p>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransferstatementModal;
