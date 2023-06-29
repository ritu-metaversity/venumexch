import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { useEffect } from "react";
import { toast } from "react-toastify";
import AlertBtn from "../../../MobileComponent/Alert/AlertBtn";
import { ImCross } from "react-icons/im"
import { setShowRegisterModalRef } from "../../../logincomponents/Signup";
import { setShowRegisterModalRefDesktop } from "../../../LoginForDesktop/Signup";
import { navRef } from "../../../Layout/LayoutForMobile"


const token = localStorage.getItem("TokenId");

let REACT_APP_API_URL = "api.247365.exchange"
axios.defaults.headers.common.Authorization = `Bearer ${token}`

export const getAllPostsComments = createAsyncThunk('auth/getAllPostsComments', async (_, { rejectWithValue }) => {
    try {
        const postsCommentsRespose = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
        return postsCommentsRespose
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const postLogin = createAsyncThunk('auth/postLogin', async (login, { rejectWithValue }) => {
    try {
        const postsLoginRespose = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/login/client-login`, login,
            {
                validateStatus: false
            });

        return postsLoginRespose
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
// export const postLoginDemoUser = createAsyncThunk('auth/postLogin', async (login, { rejectWithValue }) => {
//     try {
//         const postLoginDemoUserdata = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/login/demo-user-creation-login`, login,

//             {
//                 validateStatus: false
//             });
//         // console.log(postLoginDemoUserdata, "postLoginDemoUserdatapostLoginDemoUserdata")
//         if (postLoginDemoUserdata?.data?.token) {
//             navRefSignLogin("/m/home");
//             navRefLogin("/m/home");
//             axios.defaults.headers.common.Authorization = `Bearer ${postLoginDemoUserdata?.data?.token}`

//             localStorage.setItem("TokenId", postLoginDemoUserdata?.data?.token);
//             localStorage.setItem("usernameDemo", postLoginDemoUserdata?.data?.username);
//             localStorage.setItem("userTypeInfo", postLoginDemoUserdata?.data?.userTypeInfo);
//         }
//         return postLoginDemoUserdata
//     } catch (err) {
//         if (err) {
//             throw err
//         }
//         return rejectWithValue(err.response.data)
//     }
// })

export const getActiveSportList = createAsyncThunk('auth/getActiveSportList', async (login, { rejectWithValue }) => {
    try {
        const getActiveSportListtt = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/active-sport-list`, login);
        return getActiveSportListtt
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})

export const PostPwChangeFirstTime = createAsyncThunk('auth/PostPwChangeFirstTime', async (OldPassWordData, { rejectWithValue }) => {
    try {
        // axios.defaults.headers.post['Authorization'] = "Bearer " + token
        const postOldPassRespose = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/user/first-login-cp`, OldPassWordData);
        // console.log(postOldPassRespose, "postOldPassRespose")
        if (postOldPassRespose?.data?.status === true) {
            window.location.replace("./login");

            localStorage.clear();
        }
        if (
            postOldPassRespose.data.message
        ) {
            toast.success(postOldPassRespose.data.message || "SUSUSUSUS!!", {
                style: {
                    background: "rgb(74,117,67)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
        }
        return postOldPassRespose
    } catch (err) {
        if (
            err.response.data.message
        ) toast.error(err.response.data.message || "Something went Wrong!!", {
            style: {
                background: "rgb(156,74,70)", minHeight: 40,
                padding: 0,
                color: "white",
            }
        });
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


export const PostPasswordChange = createAsyncThunk('auth/PostPasswordChange', async (passwordChanege, { rejectWithValue }) => {
    try {
        // axios.defaults.headers.post['Authorization'] = "Bearer " + token
        const postPasswordChangeRespose = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/change-password`, passwordChanege);
        // console.log(postPasswordChangeRespose, "postPasswordChangeResposepostPasswordChangeRespose")
        if (postPasswordChangeRespose?.data?.status === true) {
            window.location.replace("./login");
            window.location.reload()
            localStorage.clear();
        }
        if (
            postPasswordChangeRespose.data.message
        ) {
            toast.success(postPasswordChangeRespose.data.message || "SUSUSUSUS!!", {
                style: {
                    background: "rgb(74,117,67)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
        }
        return postPasswordChangeRespose

    } catch (err) {
        if (
            err.response.data.message
        ) toast.error(err.response.data.message || "Something went Wrong!!", {
            style: {
                background: "rgb(156,74,70)", minHeight: 40,
                padding: 0,
                color: "white",
            }
        });
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const PostGameDetailsBySportsId = createAsyncThunk('auth/PostGameDetailsBySportsId', async (sportsId, { rejectWithValue }) => {
    try {

        const postGameDetailsBySportsIdRespose = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/active-sport-match-wise-open`, sportsId);
        return postGameDetailsBySportsIdRespose
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
// export const PostBalance = createAsyncThunk('auth/PostBalance', async ( { rejectWithValue }) => {
//     console.log("baclcdlklsfdklfk")
//     try {
//         const PostGameBalance = await axios.post(`http://${}/admin-new-apis/enduser/get-user-balance');
//         return PostGameBalance
//     } catch (err) {
//         if (err) {
//             throw err
//         }
//         return rejectWithValue(err.response.data)
//     }
// });

export const PostGameDetailsByMI = createAsyncThunk('auth/PostGameDetailsByMI', async (id, { rejectWithValue }) => {
    try {
        // axios.defaults.headers.post['Authorization'] = "Bearer " + sportsId
        const PostGameDetailsByMI = await axios.post(`http://89.39.105.69:9001/fancy/${id}`);
        return PostGameDetailsByMI
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const PostGetStackApi = createAsyncThunk('auth/PostGetStackApi', async (id, { rejectWithValue }) => {
    try {
        // axios.defaults.headers.post['Authorization'] = "Bearer " + sportsId
        const PostGetStackData = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/get-stake-button`);
        return PostGetStackData
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const PostEditStack = createAsyncThunk('auth/PostEditStack', async (data, { rejectWithValue }) => {
    try {
        const PostEditStackData = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/set-stake-button`, data);
        if (
            PostEditStackData.data.message
        ) {
            toast.success(PostEditStackData.data.message || "SUSUSUSUS!!", {
                style: {
                    background: "rgb(74,117,67)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
        }
        return PostEditStackData
    } catch (err) {
        if (
            err.response.data.message
        ) toast.error(err.response.data.message || "Something went Wrong!!", {
            style: {
                background: "rgb(156,74,70)", minHeight: 40,
                padding: 0,
                color: "white",
            }
        });
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


export const PostBetListByMatchId = createAsyncThunk('auth/PostBetListByMatchId', async (data, { rejectWithValue }) => {
    try {

        // axios.defaults.headers.post['Authorization'] = "Bearer "+token
        const BetListByMatchId = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/bet-list-by-matchid`, data);
        return BetListByMatchId
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


export const PostTransferStatement = createAsyncThunk('auth/TransferStatement', async (data, { rejectWithValue }) => {
    try {
        // axios.defaults.headers.post['Authorization'] = "Bearer "+token
        const TransferStatementData = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/account-statement`, data);
        // console.log(TransferStatementData, "TransferStatementDataTransferStatementData")


        return TransferStatementData
    } catch (err) {
        if (
            err?.response?.data?.message
        ) toast.error(err.response.data.message || "Something went Wrong!!", {
            style: {
                background: "rgb(156,74,70)", minHeight: 40,
                padding: 0,
                color: "white",
            }
        });
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const PostPlaceBet = createAsyncThunk('auth/PostPlaceBet', async (data, { rejectWithValue }) => {
    try {
        const PlaceBet = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/place-bets`, data)
        // console.log(PlaceBet, "PlaceBetPlaceBetPlaceBet")
        if (
            PlaceBet.data.message
        ) {
            toast.success(PlaceBet.data.message || "SUSUSUSUS!!", {
                style: {
                    background: "rgb(74,117,67)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
        }
        return PlaceBet

    } catch (err) {
        if (
            err.response.data.message
        ) toast.error(err.response.data.message || "Something went Wrong!!", {
            style: {
                background: "rgb(156,74,70)", minHeight: 40,
                padding: 0,
                color: "white",
            }
        });
        if (err) {
            // console.log(err, "errerrerrerrerr")
            throw err
        }
        return err.response
    }
});


export const Postactivematchsport = createAsyncThunk('auth/Postactivematchsport', async (data, { rejectWithValue }) => {
    try {
        const PlaceActivematchsport = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/active-match-sport-wise-open`, data);
        return PlaceActivematchsport
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const PostBalance = createAsyncThunk('auth/PostBalance', async (data, { rejectWithValue }) => {
    try {
        const getBalance = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/get-user-balance`, data);
        return getBalance
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const Postunsettleddddd = createAsyncThunk('auth/Postunsettleddddd', async (data, { rejectWithValue }) => {
    try {
        const Postunsettled = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/unsettled-bet`, data);
        return Postunsettled
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


export const Postcasino = createAsyncThunk('auth/Postcasino', async (data, { rejectWithValue }) => {
    try {
        const PostcasinoDataaaaaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/casino/all-casino-types`, data);
        return PostcasinoDataaaaaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }

});

export const Postprofitlossmatchwise = createAsyncThunk('auth/Postprofitlossmatchwise', async (data, { rejectWithValue }) => {
    try {
        const PostprofitlossmatchwiseData = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/report/profit-loss-match-wise`, data);
        return PostprofitlossmatchwiseData
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


export const postBetMarketAndUser = createAsyncThunk('auth/postBetMarketAndUser', async (data, { rejectWithValue }) => {
    try {
        const postBetMarketAndUserDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/bets/search-bet-market-and-user`, data);
        return postBetMarketAndUserDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


// DEPOSIT  APPPIIIIIIIII


export const Postisselfbyappurl = createAsyncThunk('auth/Postisselfbyappurl', async (appUrll, { rejectWithValue }) => {
    try {
        const postBetisselfbyappurlDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/login/is-self-by-app-url`, appUrll);
        return postBetisselfbyappurlDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

// depsosit-request-client
export const Postdepsositrequestclient = createAsyncThunk('auth/Postdepsositrequestclient', async (data, { rejectWithValue }) => {
    try {
        const postdepsositrequestclientDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/depsosit-request-client`, data);
        return postdepsositrequestclientDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


// get-paymnet-detail-app-id-wise
export const Postpaymnetdetailapp = createAsyncThunk('auth/Postpaymnetdetailapp', async (data, { rejectWithValue }) => {
    try {
        const PostpaymnetdetailappDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/get-paymnet-detail-app-id-wise`, data,

        );
        return PostpaymnetdetailappDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

// /self-deposit-app

export const Postselfdepositapp = createAsyncThunk('auth/Postselfdepositapp', async (data, { rejectWithValue }) => {
    try {
        const PostselfdepositappDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/self-deposit-app`, data, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        // console.log(PostselfdepositappDataaa, "PostselfdepositappDataaaPostselfdepositappDataaaPostselfdepositappDataaa")
        if (
            PostselfdepositappDataaa.data.message
        ) {
            toast.success(PostselfdepositappDataaa.data.message || "SUSUSUSUS!!", {
                style: {
                    background: "rgb(74,117,67)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
        }
        return PostselfdepositappDataaa
    } catch (err) {
        toast.error(err.response.data.message || "Something went Wrong!!", {
            style: {
                background: "rgb(156,74,70)", minHeight: 40,
                padding: 0,
                color: "white",
            }
        });
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


// self-withdraw-app

export const Postselfwithdrawapp = createAsyncThunk('auth/Postselfwithdrawapp', async (data, { rejectWithValue }) => {
    try {
        const PostselfwithdrawappDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/self-withdraw-app`, data
        );
        if (
            PostselfwithdrawappDataaa.data.message
        ) {
            toast.success(PostselfwithdrawappDataaa.data.message || "SUSUSUSUS!!", {
                style: {
                    background: "rgb(74,117,67)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
        }
        return PostselfwithdrawappDataaa
    } catch (err) {
        if (err.response.data.message) {

            toast.error(err.response.data.message || "Something went Wrong!!", {
                style: {
                    background: "rgb(156,74,70)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
        }
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

// withdraw-request-client
export const Postwithdrawrequestclient = createAsyncThunk('auth/Postwithdrawrequestclient', async (data, { rejectWithValue }) => {
    try {
        const PostwithdrawrequestclientDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/withdraw-request-client`, data
        );
        return PostwithdrawrequestclientDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

// util/validate-jwt-token
export const Postvalidatejwttoken = createAsyncThunk('auth/Postvalidatejwttoken', async (data, { rejectWithValue }) => {
    try {
        const PostvalidatejwttokenDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/util/validate-jwt-token`, data

            , {
                validateStatus: false
            });
        if (PostvalidatejwttokenDataaa.data.status === false) {
            localStorage.clear()
            window.location.replace("./login");
        }
        return PostvalidatejwttokenDataaa
    } catch (err) {

        if (err) {
            // console.log(err,"PostvalidatejwttokenDataErrorPostvalidatejwttokenDataError")
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

// /user/self-register
export const Postuserselfregister = createAsyncThunk('auth/Postuserselfregister', async (data, { rejectWithValue }) => {
    try {
        const PostuserselfregisterDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/user/self-register`, data
        )
        if (
            PostuserselfregisterDataaa.data.message
        ) {
            toast.success(PostuserselfregisterDataaa.data.message || "SUSUSUSUS!!", {
                style: {
                    background: "rgb(74,117,67)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
            setShowRegisterModalRef && setShowRegisterModalRef(true)
            setShowRegisterModalRefDesktop && setShowRegisterModalRefDesktop(true)
        }
        return PostuserselfregisterDataaa
    } catch (err) {
        if (err.response.data.message) {

            toast.error(err.response.data.message || "Something went Wrong!!", {
                style: {
                    background: "rgb(156,74,70)", minHeight: 40,
                    padding: 0,
                    color: "white",
                }
            });
        }
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
// MIN AND MAX API 

export const PostMinMaxGameDetails = createAsyncThunk('auth/PostMinMaxGameDetails', async (data, { rejectWithValue }) => {
    try {
        const PostMinMaxGameDetailsDataaa = await axios.get(`http://43.205.50.127:9000/betfair_api/fancy/${data}`
        )
        return PostMinMaxGameDetailsDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


export const PostUserOddPnl = createAsyncThunk('auth/PostUserOddPnl', async (data, { rejectWithValue }) => {
    try {
        const PostUserOddPnlDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/user-odds-pnl`, data
        )
        return PostUserOddPnlDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const PostUserfancypnl = createAsyncThunk('auth/PostUserfancypnl', async (data, { rejectWithValue }) => {
    try {
        const PostUserfancypnlDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/user-fancy-pnl`, data
        )
        return PostUserfancypnlDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const Postuserfancybook = createAsyncThunk('auth/Postuserfancybook', async (data, { rejectWithValue }) => {
    try {
        const PostuserfancybookDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/user-fancy-book`, data
        )
        return PostuserfancybookDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const Postloginlogout = createAsyncThunk('auth/Postloginlogout', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        const PostloginlogoutDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/login/logout`
        )
        axios.defaults.headers.common.Authorization = `Bearer ${token}`

        return PostloginlogoutDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})



export const postpendingapppii = createAsyncThunk('auth/postpendingapppii', async (data, { rejectWithValue }) => {
    try {
        console.log("loooogogoogogogoog")
        const Postpendingdtaatata = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/cancel-withdraw-request-eu`, data)
        console.log(Postpendingdtaatata, "PostpendingdtaatataPostpendingdtaatata")
        // if (Postpendingdtaatata.data.message) {
        //     toast.success(Postpendingdtaatata.data.message || "SUSUSUSUS!!", {
        //         style: {
        //             background: "rgb(74,117,67)", minHeight: 40,
        //             padding: 0,
        //             color: "white",
        //         }
        //     });

        // }
        return Postpendingdtaatata
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})

export const postUserBannerList = createAsyncThunk('auth/postUserBannerList', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        const postUserBannerListData = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/user-banner-list`, data
        )
        return postUserBannerListData
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})


export const getAboutUs = createAsyncThunk('auth/getAboutUs', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        const getAboutUsDataa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/app/getAboutUs`, data
        )
        return getAboutUsDataa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
export const getTermAndCondition = createAsyncThunk('auth/getTermAndCondition', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        const getTermAndConditionDataa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/app/getTermAndCondition`, data
        )
        return getTermAndConditionDataa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
export const getResponsibleGaming = createAsyncThunk('auth/getResponsibleGaming', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        const getResponsibleGamingDataa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/app/getResponsibleGaming`, data
        )
        return getResponsibleGamingDataa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})


// bet History
export const postBetHistory = createAsyncThunk('auth/postBetHistory', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        const postBetHistoryDataa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/bet-list-history`, data
        )
        return postBetHistoryDataa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
export const postleftmenudataopen = createAsyncThunk('auth/postleftmenudataopen', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        // https://api.247365.exchange/admin-new-apis/enduser/left-menu-data-open
        const postleftmenudataopenDataa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/left-menu-data-open`, data
        )
        return postleftmenudataopenDataa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})

export const postDemoLogin = createAsyncThunk('auth/postDemoLogin', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        // https://api.247365.exchange/admin-new-apis/enduser/left-menu-data-open
        const postDemoLoginDataa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/left-menu-data-open`, data
        )
        return postDemoLoginDataa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})