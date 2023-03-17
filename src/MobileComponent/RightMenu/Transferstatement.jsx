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

const Transferstatement = () => {
  const { PostTransferStatementData } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const [trueee, setTrueee] = useState(false);
  const [matchId, setMatchId] = useState("");


  useEffect(() => {
    if (PostTransferStatementData?.data === "") {
      console.log("true");
    } else {
      console.log("false");
    }
  }, [PostTransferStatementData?.data]);

  useEffect(() => {
    let d = new Date();
    d.setDate(d.getDate() - 14);
    let data = {
      noOfRecords: 1000,
      index: 0,
      fromDate: moment(d).format("YYYY-MM-DD"),
      toDate: moment(new Date()).format("YYYY-MM-DD"),
      type: 1,
    };
    // console.log("apiiiiiii");
    dispatch(PostTransferStatement(data));
    // console.log();
  }, [dispatch]);

  const handleDetailsStatement = (item1,item2) => {
    setMatchId({"matchid":item1,
    remark:item2
  })
    setTrueee(true);
  };

  return (
    <>
      <div className="home-page home-page-news">
        <div className="container-inner">
          <section className="m-t-10 transfer">
            <h2 className="page-title p-l-15">Transfer Statement</h2>
            <div className="table-responsive">
              <table className="table" style={{ width: "98%" }}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th className="text-right">Amount</th>
                  </tr>
                </thead>
                {PostTransferStatementData?.data &&
                PostTransferStatementData?.data?.dataList ? (
                  PostTransferStatementData?.data?.dataList.map((el) => (
                    <tbody onClick={()=>handleDetailsStatement(el?.marketid,el?.remark)}>
                      <tr>
                        <td colspan="3" class="">
                          <b>
                            <span>
                              {moment(el?.date).format(" Do MMMM YYYY")}
                            </span>
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td> {moment(el?.date).format("h:mm")}</td>
                        <td>By Credit</td>
                        <td class="text-right positive">{el?.credit}</td>
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
        </div>
      </div>
      <Modal
        show={trueee}
        onHide={() => setTrueee(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{width: "100%"}} className="back1">
          <Modal.Title id="contained-modal-title-vcenter">Result</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{width:"100%"}}>
          <div >
            <TransferstatementModal matchId={matchId}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Transferstatement;

/*
{PostTransferStatementData?.data &&
                  PostTransferStatementData?.data?.dataList &&
                  Object.keys(
                    PostTransferStatementData?.data &&
                      PostTransferStatementData?.data?.dataList
                  ).map((key) => (
                    <>
                      {console.log(key,"dfdfddfddffdf")}

                      {PostTransferStatementData&&PostTransferStatementData?.data &&
                        PostTransferStatementData?.data?.dataList[key].map((item) => (
                            <>
                              
                              {console.log(item, "itemitem")}


                              {/* <tbody>
                                <tr>
                                  <td colspan="3" class="">
                                    <b>
                                      <span>14th March 2023</span>
                                    </b>
                                  </td>
                                </tr>
                                <tr>
                                  <td>13:18</td>
                                  <td>By Credit</td>
                                  <td class="text-right positive">1030.00</td>
                                </tr>
                              </tbody>

                              </>
                              )
                            )}
                        </>
                      ))}
*/
