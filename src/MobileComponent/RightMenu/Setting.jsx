import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PostEditStack,
  PostGetStackApi,
} from "../../App/Features/auth/authActions";
import AlertBtn from "../Alert/AlertBtn";
import "./Setting.css";

const Setting = () => {
  const dispatch = useDispatch();
  const [stakeState, setStakeState] = useState({});
  const [stakeTwo, setStackUpadte] = useState(false);
  const [EditStake, setEditStake] = useState(false);
console.log(stakeState,"stakeState");
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
    setStackUpadte(true);
    dispatch(PostGetStackApi());
  };
  // console.log(stakeState, "stakeStatestakeState");
  // console.log(PostGetStack?.data, "PostGetStackPostGetStack");
  let errrorrmsg = " Enter Stacks more then 100";
  let successfullymsg = "Stake successfully updated";
  return (
    <>
      <div className="home-page home-page-news">
        <div className="home-page">
          <div className="master-flash-message">
            <div className="flash__wrapper"></div>
          </div>
          <div className="setting-page">
            <div className="eroorrr">
              {/* {  PostEditStackDataError === "Request failed with status code 400" ? " Enter Stacks more then 100 " : ""}
{  PostEditStackData?.message === "Stake Button Values Saved" ? "Stake successfully updated" : ""}
  */}
              {/* {PostEditStackDataError === "Request failed with status code 400"  ? (
        <div className="Request failed with status code 400">
          <AlertBtn val={errrorrmsg} />
        </div>
      ) : (
        ""
      )}
{PostEditStackData?.message === "Stake Button Values Saved" ? (
        <div className="Request failed with status code 400">
          <AlertBtn val={successfullymsg} />
        </div>
      ) : (
        ""
      )} */}
            </div>
            <div className="stake-buttons m-t-20" style={{ paddingTop: "0px" }}>
              <h2 className="page-title">Edit Stakes</h2>
              <div>
                <div className="stake-group">
                  {EditStake === true ? (
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
                  ) : (
                    <>
                      {PostGetStack?.data
                        ? Object.values(PostGetStack?.data)
                          .slice(0, 6)
                          .map((key, value) => {
                            return (
                              <div
                                name="stackOne"
                                text="number"
                                // onChange={handleInput}
                                className="stake readonly"
                              >
                                <p className="m-b-0">{key}</p>
                                {/* {item} */}
                              </div>
                            );
                          })
                        : ""}
                    </>
                  )}

                  {/* <div   className="stake readonly"> */}
                </div>
                {EditStake === true ? (
                  <button
                    className="btn float-right m-t-20 stackBtnEdit"
                    style={{ paddingTop: "7px", fontSize: "14px" }}
                    onClick={handleSaveStakes}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn float-right m-t-20 stackBtnEdit"
                    onClick={handleEditStakes}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
