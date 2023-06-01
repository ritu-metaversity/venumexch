import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Postdepsositrequestclient,
  Postpaymnetdetailapp,
} from "../../../App/Features/auth/authActions";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import "./Deposit.css";
import PayManually from "./PayManually";
import { useNavigate } from "react-router";
const Deposit = () => {
  const dispatch = useDispatch();
  const {
    PostdepsositrequestclientData,
    PostpaymnetdetailappDataData,
    PostselfdepositappData, PostselfdepositappDataLoading
  } = useSelector((state) => state.auth);
  const [Bitvalue, setBitValue] = useState(0);

  // console.log(
  //   PostselfdepositappDataLoading, "PostselfdepositappDataLoadingPostselfdepositappDataLoadingPostselfdepositappDataLoading"
  // );
  const userTypeInfo = localStorage.getItem("userTypeInfo");
  let navigate = useNavigate();

  useEffect(() => {
    if (userTypeInfo === "2") {
      navigate("./home");

    }
  }, [userTypeInfo])
  const [trueee, setTrueee] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const token = localStorage.getItem("TokenId");
  // console.log(trueee,"imgUrlimgUrl")
  const increment = () => {
    setBitValue(Bitvalue + 10);
  };
  const decrement = () => {
    setBitValue(Bitvalue - 10);
  };

  //  console.log(PostpaymnetdetailappDataData,"line 24")

  const handleStaticAmount = (vl) => {
    setBitValue(Bitvalue + vl);
  };
  const UpdateList = (vl) => {
    if (vl === true) {
      dispatch(Postdepsositrequestclient());
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("TokenId");

    if (token) {
      dispatch(Postdepsositrequestclient());
      dispatch(Postpaymnetdetailapp());
    }
  }, [token]);
  // console.log(PostdepsositrequestclientData,"line 18")
  const handleModal = (e, url) => {
    e.preventDefault();
    setImgUrl(url);
    setTrueee(true);
    // console.log(url)
  };

  useEffect(() => {
    if (PostselfdepositappData?.status) {
      dispatch(Postdepsositrequestclient());
    }
  }, [PostselfdepositappData?.status]);
  // console.log(trueee)
  return (
    <>
      <div className="wrapper main-conatiner">
        {
          PostselfdepositappDataLoading === true ?

            <div className=" PostselfwithdrawappDataLoadinglodding">
              <i
                className="fa fa-circle-o-notch fa-spin loading"
                style={{ fontSize: "50px" }}
              ></i>
              <p className="loading-text">Loading...</p>{" "}
            </div>
            :
            <>
              <PayManually UpdateList={UpdateList} />


              <div className="row row5 mt-2">
                <div className="col-12">
                  <div className="table-responsive">
                    <table
                      role="table"
                      aria-busy="false"
                      aria-colcount="6"
                      className="table b-table table-bordered deposit-table"
                      id="__BVID__104"
                    >
                      <thead>
                        <tr className="previous-deposite">
                          <th colSpan="4">Previous Deposite</th>
                        </tr>
                        <tr role="row" className="deposit-list">
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
                            aria-colindex="2"
                            className="text-center"
                          >
                            Image
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="3"
                            className="text-right"
                          >
                            Date
                          </th>
                          <th
                            role="columnheader"
                            scope="col"
                            aria-colindex="4"
                            className="text-right"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>


                      {PostdepsositrequestclientData &&
                        PostdepsositrequestclientData?.data &&
                        PostdepsositrequestclientData?.data.map((item) => (
                          <tbody>
                            <tr role="row">
                              <td aria-colindex="1" className="text-left">
                                {item?.amount}
                              </td>
                              <td
                                aria-colindex="2"
                                className="text-center"
                                onClick={(e) => handleModal(e, item?.image)}
                              >
                                <img
                                  alt=""
                                  className="fkjsdfsdkfjsd"
                                  src={item?.image}
                                />
                              </td>
                              <Modal
                                show={trueee}
                                onHide={() => setTrueee(false)}
                                size="lg"
                                centered
                              >
                                <Modal.Body>
                                  {/* {console.log("nsjdsjdnjnf")} */}
                                  <img src={imgUrl} alt="" className="imgggggggg" />
                                </Modal.Body>
                              </Modal>
                              <td aria-colindex="3" className="">
                                {moment(item?.time).format("MM-DD-YYYY - hh:mm")}
                              </td>
                              {item.status === "Pending" ? (
                                <td aria-colindex="4" style={{ color: "#ffa726" }}>
                                  {item?.status}
                                </td>
                              ) : item.status === "Rejected" ? (
                                <td aria-colindex="4" style={{ color: "#f44336" }}>
                                  {item?.status}
                                </td>
                              ) : (
                                <td
                                  aria-colindex="4"
                                  style={{ color: "#66bb6a", fontSize: "10px" }}
                                >
                                  {item?.status}
                                </td>
                              )}
                            </tr>
                          </tbody>
                        ))}
                    </table>
                  </div>
                </div>
              </div>
            </>

        }

      </div>
    </>
  );
};
export default Deposit;
