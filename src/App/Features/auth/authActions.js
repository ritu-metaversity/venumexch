import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { useEffect } from "react";


const token = localStorage.getItem("TokenId");

let REACT_APP_API_URL= "api.247365.exchange"
axios.defaults.headers.common.Authorization= `Bearer ${token}`
 
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
        const postsLoginRespose = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/login/client-login`, login);
        return postsLoginRespose
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
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
        return postOldPassRespose
    } catch (err) {
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
        return postPasswordChangeRespose
    } catch (err) {
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
        return PostEditStackData
    } catch (err) {
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
        return TransferStatementData
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const PostPlaceBet = createAsyncThunk('auth/PostPlaceBet', async (data, { rejectWithValue }) => {
    try {
        const PlaceBet = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/place-bets`, data);
        return PlaceBet
    } catch (err) {
        if (err) {
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
        const PostselfdepositappDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/self-deposit-app`, data, {headers:{"Content-Type":"multipart/form-data"}
    });
        return PostselfdepositappDataaa
    } catch (err) {
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
        return PostselfwithdrawappDataaa
    } catch (err) {
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
        ,{
            validateStatus: false
        });
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
        return PostuserselfregisterDataaa
    } catch (err) {
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
        const PostUserOddPnlDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/user-odds-pnl`,data
        )
        return PostUserOddPnlDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const PostUserfancypnl= createAsyncThunk('auth/PostUserfancypnl', async (data, { rejectWithValue }) => {
    try {
        const PostUserfancypnlDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/user-fancy-pnl`,data
        )
        return PostUserfancypnlDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const Postuserfancybook= createAsyncThunk('auth/Postuserfancybook', async (data, { rejectWithValue }) => {
    try {
        const PostuserfancybookDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/enduser/user-fancy-book`,data
        )
        return PostuserfancybookDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const Postloginlogout= createAsyncThunk('auth/Postloginlogout', async (data, { rejectWithValue }) => {
    try {
        // console.log("loooogogoogogogoog")
        const PostloginlogoutDataaa = await axios.post(`http://${REACT_APP_API_URL}/admin-new-apis/login/logout`
        )
        return PostloginlogoutDataaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})