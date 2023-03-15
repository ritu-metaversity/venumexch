import React, { useState } from "react";

const Betslip = (props) => {
  const [betslip, setBetslip] = useState(true);
  const [openBet, setOpenBet] = useState(false);

  const [editStake, setEditStake] = useState("none");

  const handleEditStakes = () => {
    if (editStake === "none") {
      setEditStake("block");
      props.BackBlack("block");
    } else {
      setEditStake("none");
      props.BackBlack("none");
    }
  };

  const handleBetslip = () => {
    if(openBet===true){
        setOpenBet(false)
        setBetslip(true)
    }
// setBetslip(true)

  };

  const handleOpenBets = () => {
    if(betslip===true){
        setBetslip(false)

        setOpenBet(true)
    }
    
  };

  return (
    <div>
      {" "}
      <div   className="bet-manager">
        <h4>Betslip</h4>
        <ul   className="tabs">
          <li
              className={`tab-bet-slip ${betslip === true ?"active":""}`}
            onClick={() => handleBetslip("Betslip")}
          >
            <a href="javascript:void(0)">Betslip</a>
          </li>
          <li
              className={`tab-bet-slip ${openBet===true?"active":""}`}
            onClick={() => handleOpenBets("OpenBets")}
          >
            <a href="javascript:void(0)">Open Bets</a>
          </li>
          <li>
            <button
              type="button"
                className="btn btn-primary m-r-5"
              onClick={handleEditStakes}
            >
              Edit Stakes
            </button>
          </li>
        </ul>
        <div   className="sc-content">
          <ul   className="content" style={{ position: "relative" }}>


{betslip?             <li>
              <div   className="betslip bets">
                <div   className="betslipContent">
                  <div   className="text-center m-t-10">
                    Click on the odds to add selections to the betslip.
                  </div>
                </div>
              </div>
            </li>:""

}
{betslip===true?"":



            <li>
              <div   className="bets">
                <div   className="show-bet  betslip">
                  <label   className="confirmation-checkbox">
                    <div   className="custom-control custom-checkbox">
                      <input
                        id="checkbox-1"
                        type="checkbox"
                        name="checkbox-1"
                        autocomplete="off"
                          className="custom-control-input"
                        value="true"
                      />
                      <label for="checkbox-1"   className="custom-control-label">
                        Show Bet Info
                      </label>
                    </div>
                  </label>
                </div>
                <div   className="matched-bets">
                  <div   className="toggleable-list-title">
                    <span>Unmatched Bets</span>{" "}
                    <i   className="fas fa-angle-down m-l-5 toggle-icon"></i>
                  </div>
                  <p   className="empty-list-info">
                    <span>You Have no Unmatched Bet</span>
                  </p>
                </div>

                <div   className="matched-bets">
                  <div   className="toggleable-list-title">
                    <span>Matched Bets</span>{" "}
                    <i   className="fas fa-angle-down m-l-5 toggle-icon"></i>
                  </div>
                  <div   className="filter">
                    <div id="radios2" role="group" tabindex="-1"   className="">
                      <div   className="custom-control custom-control-inline custom-checkbox">
                        <input
                          type="checkbox"
                          name="radioSubComponent"
                          autocomplete="off"
                            className="custom-control-input"
                          value="bet"
                          id="__BVID__72"
                        />
                        <label
                            className="custom-control-label"
                          for="__BVID__72"
                        >
                          Consolidate
                        </label>
                      </div>

                      <div   className="custom-control custom-control-inline custom-checkbox">
                        <input
                          type="checkbox"
                          name="radioSubComponent"
                          autocomplete="off"
                            className="custom-control-input"
                          value="average"
                          id="__BVID__73"
                        />
                        <label
                            className="custom-control-label"
                          for="__BVID__73"
                        >
                          Average Odd
                        </label>
                      </div>

                      <div   className="custom-control custom-control-inline custom-checkbox">
                        <input
                          type="checkbox"
                          name="radioSubComponent"
                          autocomplete="off"
                            className="custom-control-input"
                          value="date"
                          id="__BVID__74"
                        />
                        <label
                            className="custom-control-label"
                          for="__BVID__74"
                        >
                          Order By Date
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
        }


            <li>
              <div
                  className="edit-stakes-buttons"
                style={{ display: `${editStake}` }}
              >
                <div   className="buttons-div">
                  <input
                    type="number"
                    onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                    name="ButtonValue1"
                    aria-required="true"
                    aria-invalid="false"
                    value="1111"
                  />
                  <input
                    type="number"
                    onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                    name="ButtonValue2"
                    aria-required="true"
                    aria-invalid="false"
                    value="2222"
                  />
                  <input
                    type="number"
                    onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                    name="ButtonValue3"
                    aria-required="true"
                    aria-invalid="false"
                    value="3333"
                  />
                  <input
                    type="number"
                    onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                    name="ButtonValue4"
                    aria-required="true"
                    aria-invalid="false"
                    value="4444"
                  />
                  <input
                    type="number"
                    onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                    name="ButtonValue5"
                    aria-required="true"
                    aria-invalid="false"
                    value="5555"
                  />
                  <input
                    type="number"
                    onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                    name="ButtonValue6"
                    aria-required="true"
                    aria-invalid="false"
                    value="6666"
                  />
                  <div   className="text-center m-t-10">
                    <button
                        className="btn btn-link text-right"
                      onClick={handleEditStakes}
                    >
                      Cancel
                    </button>
                    <button   className="btn btn-primary">Save</button>
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
