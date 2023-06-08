import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostEditStack, PostGetStackApi } from "../../App/Features/auth/authActions";
import BetPage from "./BetPage";

const Betslip = ({ props, gamedetailsData }) => {
  const dispatch = useDispatch();
  const [stakeState, setStakeState] = useState({});
  // const [stakeTwo, setStackUpadte] = useState(false);
  const [EditStake, setEditStake] = useState(false);
  const [betslip, setBetslip] = useState(true);
  const [openBet, setOpenBet] = useState(false);
  const [editStakeBtn, setEditBtn] = useState("none");

  const [gameIframeId, setGameIframeId] = useState(4);

  const {
    PostBetListByMatchIdData,
  } = useSelector((state) => state.auth);

  const iddd = localStorage.getItem("SportId");
  useEffect(() => {
    setGameIframeId(iddd);
  }, [iddd]);
  const handleEditBtn = () => {
    if (editStakeBtn === "none") {
      setEditBtn("block");
      props.BackBlack("block");
    } else {
      setEditBtn("none");
      props.BackBlack("none");
    }
  };


  console.log(PostBetListByMatchIdData, "PostBetListByMatchIdDataPostBetListByMatchIdData")
  const handleBetslip = () => {
    if (openBet === true) {
      setOpenBet(false);
      setBetslip(true);
    }
    // setBetslip(true)
  };

  const handleOpenBets = () => {
    if (betslip === true) {
      setBetslip(false);

      setOpenBet(true);
    }
  };

  const { PostGetStack, PostEditStackData, PostEditStackDataError } =
    useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(PostGetStackApi());
  }, [dispatch, EditStake]);

  useEffect(() => {
    if (PostEditStackData?.status === true) {
      dispatch(PostGetStackApi());
    }
  }, [PostEditStackData?.status]);

  useEffect(() => {
    setStakeState(PostGetStack?.data || {});
  }, [PostGetStack]);

  const handleInput = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setStakeState((prev) => ({ ...prev, [inputName]: inputValue }));

  };
  const handleEditStakes = () => {
    setEditStake(true);
  };

  const handleSaveStakes = () => {
    setEditStake(false);
    // console.log("postapi");
    dispatch(PostEditStack(stakeState));
    // setStackUpadte(true);
    dispatch(PostGetStackApi());
    setEditBtn("none");
    props.BackBlack("none");
  };

  return (
    <div >
      {" "}
      <div className="bet-manager" >
        <h4>Betslip</h4>
        <ul className="tabs" style={{ borderBottom: "1px solid #000", paddingBottom: "12px" }}>
          <li
            className={`tab-bet-slip ${betslip === true ? "active" : ""}`}
            onClick={() => handleBetslip("Betslip")}
          >
            <a href="javascript:void(0)">Betslip</a>
          </li>
          <li
            className={`tab-bet-slip ${openBet === true ? "active" : ""}`}
            onClick={() => handleOpenBets("OpenBets")}
          >
            <a href="javascript:void(0)">Open Bets</a>
          </li>
          <li>
            <button
              type="button"
              className="btn editBtn m-r-5"
              onClick={handleEditBtn}
            >
              Edit Stakes
            </button>
          </li>
        </ul>
        <div className="sc-content">
          <ul className="content" style={{ position: "relative" }}>
            {betslip ? (

              <li>
                <div className="betslip bets">
                  <div className="betslipContent">


                    <div className="text-center m-t-10">
                      Click on the odds to add selections to the betslip.
                    </div>

                    <BetPage gamedetailsData={gamedetailsData} />


                  </div>
                </div>
              </li>
            ) : (
              ""
            )}
            {betslip === true ? (
              ""
            ) : (
              <li>
                <div className="bets">
                  <div className="show-bet  betslip">
                    <label className="confirmation-checkbox">
                      <div className="custom-control custom-checkbox">
                        <input
                          id="checkbox-1"
                          type="checkbox"
                          name="checkbox-1"
                          autocomplete="off"
                          className="custom-control-input"
                          value="true"
                        />
                        <label
                          for="checkbox-1"
                          className="custom-control-label"
                        >
                          Show Bet Info
                        </label>
                      </div>
                    </label>
                  </div>
                  <div className="matched-bets">
                    <div className="toggleable-list-title"><span>Matched Bets</span> <i className="fas fa-angle-down m-l-5 toggle-icon"></i></div>
                    <div className="filter">
                      <div id="radios2" role="group" tabindex="-1" className="">
                        <div className="custom-control custom-control-inline custom-checkbox">
                          <input type="checkbox" name="radioSubComponent" autocomplete="off" className="custom-control-input" value="bet" id="__BVID__77" />
                          <label className="custom-control-label" for="__BVID__77">Consolidate</label>
                        </div>
                        <div className="custom-control custom-control-inline custom-checkbox">
                          <input type="checkbox" name="radioSubComponent" autocomplete="off" className="custom-control-input" value="average" id="__BVID__78" />
                          <label className="custom-control-label" for="__BVID__78">Average Odd</label></div>
                        <div className="custom-control custom-control-inline custom-checkbox">
                          <input type="checkbox" name="radioSubComponent" autocomplete="off" className="custom-control-input" value="date" id="__BVID__79" />
                          <label className="custom-control-label" for="__BVID__79">Order By Date</label></div>
                      </div>
                    </div>
                    {/*   <b><a href="/gamedetail/32403633" className="router-link-exact-active router-link-active">Sri Lanka v Afghanistan</a></b>*/}
                    <div className="table-responsive">
                      <table className="table">
                        {/*  <thead>
                          <th colspan="4">Sri Lanka.</th>
            </thead>*/}
                        <tbody>
                          <tr className="odds-header">
                            <td className="text-left">Nation</td>
                            <td className="text-left">Odds</td>
                            <td className="text-right">Stake</td>
                            <td className="text-right">Profit/Liability</td>
                          </tr>
                          {PostBetListByMatchIdData?.data &&
                            Object.keys(PostBetListByMatchIdData?.data).map((key) => (
                              <>
                                {PostBetListByMatchIdData?.data[key].map((item) => (
                                  <>
                                    <tr className={`back ${item?.back === false ? "lay" : "back"}`}>
                                      <td className="text-left">{item?.nation}</td>
                                      <td className="text-left">{item?.priveValue}</td>
                                      <td className="text-right">{item?.amount}</td>

                                      <td className="text-right">{item?.priveValue}</td>
                                    </tr>
                                  </>
                                ))}
                              </>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>


                </div>
              </li>
            )}

            <li>
              <div
                className="edit-stakes-buttons"
                style={{ display: `${editStakeBtn}` }}
              >
                <div className="buttons-div">
                  {
                    PostGetStack?.data ? (
                      Object.keys(PostGetStack?.data)
                        .slice(0, 6)
                        .map((key, index) => {
                          return (
                            <input
                              name={key}
                              text="number"
                              value={stakeState[key]}
                              onChange={handleInput}
                              className="stake readonly"
                            />
                          );
                        })
                    ) : (
                      ""
                    )
                  }


                  <div className="text-center m-t-10">
                    <button
                      className="btn editBtn text-left"
                      onClick={handleEditBtn}

                    >
                      Cancel
                    </button>

                    <button className="btn editBtn" onClick={handleSaveStakes}>Save</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Betslip;
