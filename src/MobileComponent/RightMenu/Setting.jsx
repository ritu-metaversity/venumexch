import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PostEditStack,
  PostGetStackApi
} from "../../App/Features/auth/authActions";
import AlertBtn from "../Alert/AlertBtn";
import "./Setting.css";

const Setting = () => {
  const dispatch = useDispatch();
  const [stakeState, setStakeState] = useState({});
  const [stakeTwo, setStackUpadte] = useState(false);
  const [stakeUpdate, setStakeThree] = useState("");
  const [EditStake, setEditStake] = useState(false);
  // let token = localStorage.getItem("TokenId");
  // console.log(stakeOne, "stakeOne");
  // console.log(stakeThree, "stakeThree");
  // console.log(stakeThree, "stakeThree");
  const { PostGetStack,PostEditStackData ,PostEditStackDataError} = useSelector((state) => state.auth);
  // console.log(PostEditStackData,"PostEditStackData");
  useEffect(() => {
    dispatch(PostGetStackApi());
  }, [dispatch, stakeUpdate, EditStake]);


  useEffect(() => {
   if(PostEditStackData?.status===true){
    dispatch(PostGetStackApi());}
  }, [PostEditStackData?.status]);

  useEffect(() => {
    setStakeState(PostGetStack?.data || {});
  }, [PostGetStack]);
// console.log(PostEditStackData,"PostEditStackData")
// console.log(PostEditStackDataError,"PostEditStackDataError")
  // console.log(PostGetStack);

  const handleInput = (e) => {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setStakeState((prev) => ({ ...prev, [inputName]: inputValue }));
    // switch (inputName) {
    //   case "stackOne":
    //     setStakeOne(inputValue);
    //     break;
    //   case "stackTwo":
    //     setStakeTwo(inputValue);
    //     break;
    //   case "stackThree":
    //     setStakeThree(inputValue);
    //     break;
    //   default:
    //     return false;
    // }
  };
  // console.log(stakeState)

  // const handleEditStakes = () => {
  //   let dataataata = {
  //     stack1: 101,
  //     stack2: 102,
  //     stack3: 103,
  //     stack4: 104,
  //     stack5: 105,
  //     stack6: 106,
  //     stack7: 107,
  //     stack8: 108,
  //     stack9: 109,
  //     stack10: 120,
  //   };
  //   console.log(dataataata,"dataataata")
  //   dispatch(PostEditStack(token,dataataata))
  //   console.log("API HIT ");
  // };
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
  let errrorrmsg = " Enter Stacks more then 100"
  let successfullymsg =  "Stake successfully updated"
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
                      Object.keys(PostGetStack?.data).map((key, index) => {
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
                    // <>
                    //   <input
                    //     name={"stack"}
                    //     text="number"
                    //     onChange={handleInput}
                    //     className="stake readonly"
                    //     value={stakeOne}
                    //   />
                    //   {/* </div> */}
                    //   {/* <div   className="stake readonly"> */}
                    //   <input
                    //     name="stackTwo"
                    //     text="number"
                    //     onChange={handleInput}
                    //     className="stake readonly"
                    //     value={stakeTwo}
                    //   />
                    //   {/* </div> */}
                    //   {/* <div   className="stake readonly"> */}
                    //   <input
                    //     name="stackThree"
                    //     text="number"
                    //     onChange={handleInput}
                    //     className="stake readonly"
                    //     value={stakeThree}
                    //   />
                    //   {/* </div> */}
                    // </>

                    <>
                      {PostGetStack?.data
                        ? Object.values(PostGetStack?.data).map(
                            (key, value) => {
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
                            }
                          )
                        : ""}
                    </>
                  )}

                  {/* <div   className="stake readonly"> */}
                </div>
                {EditStake === true ? (
                  <button
                    className="btn btn-lg float-right btn-primary m-t-20"
                    style={{ paddingTop: "7px", fontSize: "14px" }}
                    onClick={handleSaveStakes}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-lg float-right btn-primary m-t-20"
                    style={{ paddingTop: "7px", fontSize: "14px" }}
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
