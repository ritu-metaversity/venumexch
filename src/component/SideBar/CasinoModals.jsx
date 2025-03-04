import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { psotbetsingleusevalue } from "../../App/Features/auth/authActions";
import "./casionmodal.css"
import cassionimg from "./casino.png"
const CasinoModals = (type) => {
    const [singleUserValue, setSingleUserValue] = useState()
    const dispatch = useDispatch();
    const { psotbetsingleusevalueData } = useSelector((state) => state.auth);

    // console.log(psotbetsingleusevalueData?.data?.value, "kjhgfcvbhuytfv")
    useEffect(() => {
        // GameAPI.SINGLE_USER_VALUE().then((res) => {
        //     setSingleUserValue(res?.data?.value)
        // })
        dispatch(psotbetsingleusevalue())
    }, [])
    useEffect(() => {

        setSingleUserValue(psotbetsingleusevalueData?.data[type?.type])
    }, [])
    console.log(psotbetsingleusevalueData, "sfdghrgterfdasx");
    // {psotbetsingleusevalueData?.data?.value}
    return (
        <>
            <div className="main_casino_modals">

                <div className="casino_message">
                    <img src={cassionimg} alt="" className="casion_alt_popup" />
                    <p className="please_note">Please Note</p>
                    <p className="points">(1 Points = ₹{singleUserValue})</p>
                    <div className="casino_dis">
                        <p>
                            <span>For Example:</span> If you place ₹100 your bet will be ₹
                            {100 * singleUserValue} Win or Loss according to the above
                            calculation.
                        </p>
                        <p>
                            यदि आप ₹100 लगाते हैं तो उपरोक्त गणना के अनुसार आपकी शर्त जीत या हार ₹ {100 * singleUserValue} होगी।
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CasinoModals;









