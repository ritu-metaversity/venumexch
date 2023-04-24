import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postunsettleddddd } from "../../App/Features/auth/authActions";

const Mymarkets = () => {
  const { PostunsettledData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    let data = { betType: 1, index: 0, noOfRecords: 5, sportType: 1 };

    dispatch(Postunsettleddddd(data));
  }, [dispatch]);

  return <div>Mymarkets</div>;
};

export default Mymarkets;
