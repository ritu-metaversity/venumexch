import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Postdepsositrequestclient,
    Postpaymnetdetailapp,
} from "../../../App/Features/auth/authActions";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import "./DepositForDesktop.css";
import PayManually from "./PayManually";
const DepositForDesktop = () => {
    const dispatch = useDispatch();
    const {
        PostdepsositrequestclientData,
        PostpaymnetdetailappDataData,
        PostdepsositrequestclientDataLoading,
        PostselfdepositappData,
    } = useSelector((state) => state.auth);
    const [Bitvalue, setBitValue] = useState(0);

    const [trueee, setTrueee] = useState(false);
    const [imgUrl, setImgUrl] = useState("");

    const token = localStorage.getItem("TokenId");

    const increment = () => {
        setBitValue(Bitvalue + 10);
    };
    const decrement = () => {
        setBitValue(Bitvalue - 10);
    };

    const handleStaticAmount = (vl) => {
        setBitValue(Bitvalue + vl);
    };
    const UpdateList = (vl) => {
        if (vl === true) {
            dispatch(Postdepsositrequestclient());
        }
    };
    useEffect(() => {
        if (token) {
            dispatch(Postdepsositrequestclient());
            dispatch(Postpaymnetdetailapp());
        }
    }, []);
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
            {
                PostdepsositrequestclientDataLoading === true ?


                    <div

                        style={{

                            backgroundColor: "#0000002b",


                        }}>
                        <i
                            className="fa fa-spinner fa-spin loading"
                            style={{ fontSize: "50px" }}
                        ></i>
                    </div>
                    :
                    <div className="main_div_for_deposite" >
                        <PayManually UpdateList={UpdateList} />




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
                                        className="text-center"
                                    >
                                        Date
                                    </th>
                                    <th
                                        role="columnheader"
                                        scope="col"
                                        aria-colindex="4"
                                        className="text-center"
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
                                                    className="fkjsdfsdkfjsd text-center"
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
                                            <td aria-colindex="3" className="text-center">
                                                {item?.time}
                                            </td>
                                            {item.status === "Pending" ? (
                                                <td aria-colindex="4" style={{ color: "#ffa726" }}
                                                    className="text-center">
                                                    {item?.status}
                                                </td>
                                            ) : item.status === "Rejected" ? (
                                                <td aria-colindex="4" style={{ color: "#f44336" }}
                                                    className="text-center">
                                                    {item?.status}
                                                </td>
                                            ) : (
                                                <td
                                                    aria-colindex="4"
                                                    className="text-center"
                                                    style={{ color: "#66bb6a", fontSize: "10px" }}
                                                >
                                                    {item?.status}
                                                </td>
                                            )}
                                        </tr>
                                    </tbody>
                                ))}
                        </table>



                    </div>}
        </>
    );
};
export default DepositForDesktop;
