import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const token = localStorage.getItem("TokenId");

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
        const postsLoginRespose = await axios.post('http://api.247365.exchange/admin-new-apis/login/client-login', login);
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
        const getActiveSportListtt = await axios.post('http://api.247365.exchange/admin-new-apis/enduser/active-sport-list', login);
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
        const postOldPassRespose = await axios.post('http://api.247365.exchange/admin-new-apis/user/first-login-cp', OldPassWordData);
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
        const postPasswordChangeRespose = await axios.post('http://api.247365.exchange/admin-new-apis/enduser/change-password', passwordChanege);
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
        
        const postGameDetailsBySportsIdRespose = await axios.post('http://api.247365.exchange/admin-new-apis/enduser/active-sport-match-wise-open', sportsId);
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
//         const PostGameBalance = await axios.post('http://api.247365.exchange/admin-new-apis/enduser/get-user-balance');
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
        const PostGetStackData = await axios.post("http://api.247365.exchange/admin-new-apis/enduser/get-stake-button");
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
        const PostEditStackData = await axios.post("http://api.247365.exchange/admin-new-apis/enduser/set-stake-button", data);
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
        const BetListByMatchId = await axios.post("http://api.247365.exchange/admin-new-apis/enduser/bet-list-by-matchid", data);
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
        const TransferStatementData = await axios.post("http://api.247365.exchange/admin-new-apis/enduser/account-statement", data);
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
        const PlaceBet = await axios.post("http://api.247365.exchange/admin-new-apis/enduser/place-bets", data);
        return PlaceBet
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});


export const Postactivematchsport = createAsyncThunk('auth/Postactivematchsport', async (data, { rejectWithValue }) => {
    try {
        const PlaceActivematchsport = await axios.post("http://api.247365.exchange/admin-new-apis/enduser/active-match-sport-wise-open", data);
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
        const getBalance = await axios.post("http://api.247365.exchange/admin-new-apis/enduser/get-user-balance", data);
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
        const Postunsettled = await axios.post("http://api.247365.exchange/admin-new-apis/enduser/unsettled-bet", data);
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
        const PostcasinoDataaaaaa = await axios.post("http://api.247365.exchange/admin-new-apis/casino/all-casino-types", data);
        return PostcasinoDataaaaaa
    } catch (err) {
        if (err) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }

});

// export const Postcasino = createAsyncThunk('auth/Postcasino', async (data, { rejectWithValue }) => {
//     try {
//         const PostcasinoDataaaaaa = await axios.post("http://api.247365.exchange/admin-new-apis/casino/casino-tables-by-types”", data);
//         return PostcasinoDataaaaaa
//     } catch (err) {
//         if (err) {
//             throw err
//         }
//         return rejectWithValue(err.response.data)
//     }
// });
