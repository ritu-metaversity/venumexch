import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PostBetListByMatchId,
  Postunsettleddddd,
} from "../../App/Features/auth/authActions";
import "./Mybets.css";
import { AiOutlineDoubleLeft } from "@react-icons/all-files/ai/AiOutlineDoubleLeft";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";

const Mybets = () => {
  const [unmatchedBets, setUnmatchedBets] = useState(false);
  const [matchedBets, setmatchedBets] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const handleUnmatched = () => {
    if (unmatchedBets === true) {
      setUnmatchedBets(false);
    } else {
      setUnmatchedBets(true);
    }
    // console.log("ssjjk");
  };
  const handlematched = () => {
    if (matchedBets === true) {
      setmatchedBets(false);
    } else {
      setmatchedBets(true);
    }
    // console.log("ssjjk");
  };

  const { PostunsettledData, PostunsettledDataLoading } = useSelector(
    (state) => state.auth
  );

  console.log(PostunsettledDataLoading, "PostunsettledDataLoading");

  const dispatch = useDispatch();
  // console.log(PostBetListByMatchIdData ,"dushyant")

  useEffect(() => {
    let data = { betType: 1, index: pageNumber, noOfRecords: 5, sportType: 1 };

    dispatch(Postunsettleddddd(data));
  }, [pageNumber]);

  const handleDoubleLeft = (vl) => {
    if (vl === "doubleleft") {
      setPageNumber(0);
    } else if (vl === "sigleleft") {
      setPageNumber(pageNumber - 1);
    } else if (vl === "singleright") {
      setPageNumber(1 + pageNumber);
    } else {
      setPageNumber(PostunsettledData?.data?.totalPages);
    }
  };
  console.log(pageNumber, "hello");

  console.log(PostunsettledData, "PostunsettledData");
  return (
    <>
      <section className="my-bets-container  manit">
        <h2
          className="page-title m-t-20 p-l-15 "
          style={{ marginBottom: "4px" }}
        >
          Open Bets
        </h2>

        <div
          data-toggle="collapse"
          data-target=".matched-bet"
          className={`toggleable-list-title m-t-10 ${
            matchedBets === true ? "" : "collapsed"
          }`}
          aria-expanded="true"
          // aria-expanded={`${unmatchedBets===true? "true":"false"}`}
        >
          <span>Matched Bets</span>{" "}
          <i
            className="fas fa-angle-down toggle-icon float-right m-r-10 "
            onClick={handlematched}
          ></i>
        </div>
        <div>
          {PostunsettledDataLoading === true ? (
            <div className=" lodding">
              <i
                className="fa fa-circle-o-notch fa-spin loading"
                style={{ fontSize: "50px" }}
              ></i>
              <p className="loading-text">Loading...</p>{" "}
            </div>
          ) : (
            <div
              className={`events matched-bet ${
                matchedBets === true ? "collapse " : "collapse show"
              } `}
            >
              {PostunsettledData?.data &&
              PostunsettledData?.data?.dataList?.length > 0 ? (
                PostunsettledData?.data?.dataList.map((el) => (
                  <div class="events matched-bet collapse show">
                    <ul>
                      {console.log(el, "elelelel")}
                      <li>
                        <div>
                          <a
                            href={`/m/gamedetail/${el?.matchId}`}
                            class={`${
                              el?.isback === false ? "lay" : "back"
                            }-bet`}
                          >
                            <u>
                              {el?.isback === false ? "lay" : "Back"}{" "}
                              {el?.nation}
                              for {el?.price} @ {el?.rate}{" "}
                            </u>
                          </a>
                        </div>
                        <div class="bet-details">
                          <div>
                            <b>{el?.eventName}</b>
                          </div>
                          <div>
                            <b>{el?.marketname}</b>
                          </div>
                          <div>
                            <b>Placed: </b>{" "}
                            <span>
                              {moment(el?.time).format(" D/mm/YYYY h:mm")}
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))
              ) : (
                <tbody>
                  <tr>
                    {console.log("asdkjasdlkajsdkjasldkajslakjdas")}
                    <td colspan="3" className="text-center">
                      There Have Been No Transfers.
                    </td>
                  </tr>
                </tbody>
              )}
            </div>
          )}
        </div>
      </section>
      <div className="pagination">
        <button
          disabled={pageNumber === 0 ? true : false}
          className="paginationBtn"
          onClick={() => handleDoubleLeft("doubleleft")}
        >
          <AiOutlineDoubleLeft className="arrowDoubleLeft" />
        </button>
        <button
          disabled={pageNumber === 0 ? true : false}
          className="paginationBtn"
          style={{ marginLeft: "-9px" }}
          onClick={() => handleDoubleLeft("sigleleft")}
        >
          <AiOutlineLeft className="arrowSingleLeft" />
        </button>
        <div className="paginationno">
          <div style={{ marginTop: "7px", marginLeft: "11px" }}>
            {pageNumber + 1}
          </div>
        </div>

        <button
          disabled={
            PostunsettledData?.data?.totalPages === pageNumber ? true : false
          }
          className="paginationBtn"
          style={{ marginLeft: "-10px" }}
          onClick={() => handleDoubleLeft("singleright")}
        >
          <AiOutlineRight className="arrowSingleRight" />
        </button>
        <button
          disabled={
            PostunsettledData?.data?.totalPages === pageNumber ? true : false
          }
          className="paginationBtn"
          onClick={() => handleDoubleLeft("doubleright")}
        >
          <AiOutlineDoubleRight className="arrowDoubleRight" />
        </button>
      </div>
    </>
  );
};

export default Mybets;
