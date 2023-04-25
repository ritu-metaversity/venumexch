import React, { useState } from "react";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postBetMarketAndUser,
  PostTransferStatement,
} from "../../App/Features/auth/authActions";
import "./Transferstatement.css";
import Modal from "react-bootstrap/Modal";
import TransferstatementModal from "./TransferstatementModal";
import { AiOutlineDoubleLeft } from "@react-icons/all-files/ai/AiOutlineDoubleLeft";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { AiOutlineDoubleRight } from "@react-icons/all-files/ai/AiOutlineDoubleRight";

const Transferstatement = () => {
  const { PostTransferStatementData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [trueee, setTrueee] = useState(false);
  const [matchId, setMatchId] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (PostTransferStatementData?.data === "") {
      // console.log("true");
    } else {
      // console.log("false");
    }
  }, [PostTransferStatementData?.data]);

  // console.log(PostTransferStatementData?.data?.totalPages, "hello");

  useEffect(() => {
    let d = new Date();
    d.setDate(d.getDate() - 14);
    let data = {
      noOfRecords: 100,
      index: pageNumber,
      fromDate: moment(d).format("YYYY-MM-DD"),
      toDate: moment(new Date()).format("YYYY-MM-DD"),
      type: 1,
    };
    // console.log("apiiiiiii");
    dispatch(PostTransferStatement(data));
    // console.log();
  }, [pageNumber]);

  const handleDetailsStatement = (item1, item2) => {
    setMatchId({ matchid: item1, remark: item2 });
    setTrueee(true);
  };

  const handleDoubleLeft = (vl) => {
    if (vl === "doubleleft") {
      setPageNumber(1);
    } else if (vl === "sigleleft") {
      setPageNumber(pageNumber - 1);
    } else if (vl === "singleright") {
      setPageNumber(1 + pageNumber);
    } else {
      setPageNumber(PostTransferStatementData?.data?.totalPages);
    }
  };
  console.log(pageNumber, "hello");

  return (
    <>
      <div className="home-page home-page-news">
        <div className="container-inner">
          <section className="m-t-10 transfer">
            <h2 className="page-title p-l-15">Account Statement</h2>
            <div className="table-responsive">
              <table className="table" style={{ width: "98%" }}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Credit</th>
                    <th>Debit</th>
                    <th className="text-right">Balance</th>
                    <th>Remark</th>
                  </tr>
                </thead>
                {PostTransferStatementData?.data &&
                PostTransferStatementData?.data?.dataList ? (
                  PostTransferStatementData?.data?.dataList.map((el) => (
                    <tbody
                      onClick={() =>
                        handleDetailsStatement(el?.marketid, el?.remark)
                      }
                    >
                      {/* <tr>
                        <td colspan="3" class="">
                          <b>
                           
                            <span>
                              {moment(el?.date).format(" Do MMMM YYYY")}
                            </span>
                          </b>
                        </td>
                      </tr> */}
                      <tr>
                        <td> {moment(el?.date).format("h:mm")}</td>
                        <td style={{ color: "green" }}> {el?.credit}</td>
                        <td style={{ color: "red" }}>{el?.debit}</td>
                        <td>{el?.pts}</td>
                        <td>{el?.remark}</td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <tbody>
                    <tr>
                      <td colspan="3" className="text-center">
                        There Have Been No Transfers In The Last 14 Days.
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </section>
          <div className="pagination">
            <button
              disabled={pageNumber === 1 ? true : false}
              className="paginationBtn"
              onClick={() => handleDoubleLeft("doubleleft")}
            >
              <AiOutlineDoubleLeft className="arrowDoubleLeft" />
            </button>
            <button
              disabled={pageNumber === 1 ? true : false}
              className="paginationBtn"
              style={{ marginLeft: "-9px" }}
              onClick={() => handleDoubleLeft("sigleleft")}
            >
              <AiOutlineLeft className="arrowSingleLeft" />
            </button>
            <div className="paginationno">
              <div style={{ marginTop: "7px", marginLeft: "11px" }}>
                {pageNumber}
              </div>
            </div>

            <button
              disabled={
                PostTransferStatementData?.data?.totalPages === pageNumber
                  ? true
                  : false
              }
              className="paginationBtn"
              style={{ marginLeft: "-10px" }}
              onClick={() => handleDoubleLeft("singleright")}
            >
              <AiOutlineRight className="arrowSingleRight" />
            </button>
            <button
              disabled={
                PostTransferStatementData?.data?.totalPages === pageNumber
                  ? true
                  : false
              }
              className="paginationBtn"
              onClick={() => handleDoubleLeft("doubleright")}
            >
              <AiOutlineDoubleRight className="arrowDoubleRight" />
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={trueee}
        onHide={() => setTrueee(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ width: "100%" }} className="back1">
          <Modal.Title id="contained-modal-title-vcenter">Result</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "100%" }}>
          <div>
            <TransferstatementModal matchId={matchId} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Transferstatement;
