import {createSlice} from '@reduxjs/toolkit'
import {getAllPostsComments ,postLogin,PostPwChangeFirstTime,PostPasswordChange,PostGameDetailsBySportsId,PostBalance,
    PostGameDetailsByMI,PostGetStackApi,PostEditStack,PostBetListByMatchId,PostTransferStatement,PostPlaceBet,Postactivematchsport,
    GetGeolocationPosition} from './authActions' 

const INITAL_STATE = {

    auth: '',
    authLoading: false,
    authError: null,

    data: null,
    dataLoading: false,
    dataError: null,

    postLoginData:null,
    postLoginDataLoading:false,
    postLoginDataError:null,

    postFirstTimeLogin:null,
    postFirstTimeLoginLoading:false,
    postFirstTimeLoginError:null,

    postPasswordChange:null,
    postPasswordChangeLoading:false,
    postPasswordChangeError:null,

    PostGamesById:null,
    PostGamesByIdLoading:false,
    PostGamesByIdError:null,

    PostTotalBalance:null,
    PostTotalBalanceLoading:false,
    PostTotalBalanceError:null,

    PostGameDetailsByMatchID:null,
    PostGameDetailsByMatchIDLoading:false,
    PostGameDetailsByMatchIDError:null,

    PostGetStack:null,
    PostGetStackLoading:false,
    PostGetStackError:null,

    PostEditStack:null,
    PostEditStackLoading:false,
    PostEditStackError:null,

    PostBetListByMatchIdData:null,
    PostBetListByMatchIdDataLoading:false,
    PostBetListByMatchIdDataError:null,

    PostTransferStatementData:null,
    PostTransferStatementDataLoading:false,
    PostTransferStatementDataError:null,


    PostBetingOnGameDetail:null,
    PostBetingOnGameDetailLoading:false,
    PostBetingOnGameDetailError:null,

    Postmatchsport:null,
    PostmatchsportLoading:false,
    PostmatchsportError:null,

    // GetGeolocationIP:null,
    // GetGeolocationIPLoading:false,
    // GetGeolocationIPError:null,

}

const authSlice = createSlice({
    name: "auth",
    initialState: INITAL_STATE,
    extraReducers: bulder => {
        bulder.addCase(getAllPostsComments.pending, (state) => {
            state.data = null;
            state.dataLoading =true;
            state.dataError = null;
        }).addCase(getAllPostsComments.rejected, (state, action) => {
            state.data = null;
            state.dataLoading =false;
            state.dataError = action.error.message;
        }).addCase(getAllPostsComments.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.dataLoading =false;
            state.dataError = null
        })
        .addCase(postLogin.pending, (state) => {
            state.postLoginData = null;
            state.postLoginDataLoading =true;
            state.postLoginDataError = null;
        }).addCase(postLogin.rejected, (state, action) => {
            state.postLoginData = null;
            state.postLoginDataLoading =false;
            state.postLoginDataError = action.error.message;
        }).addCase(postLogin.fulfilled, (state, action) => {
            state.postLoginData = action.payload;
            state.postLoginDataLoading =false;
            state.postLoginDataError = null;
        })
        .addCase(PostPwChangeFirstTime.pending, (state) => {
            state.postFirstTimeLogin = null;
            state.postFirstTimeLoginLoading =true;
            state.postFirstTimeLoginError = null;
        }).addCase(PostPwChangeFirstTime.rejected, (state, action) => {
            state.postFirstTimeLogin = null;
            state.postFirstTimeLoginLoading =false;
            state.postFirstTimeLoginError = action.error.message;;
        }).addCase(PostPwChangeFirstTime.fulfilled, (state, action) => {
            state.postFirstTimeLogin = action.payload;;
            state.postFirstTimeLoginLoading =false;
            state.postFirstTimeLoginError = null;
        })
        .addCase(PostPasswordChange.pending, (state) => {
            state.postPasswordChange = null;
            state.postPasswordChangeLoading =true;
            state.postPasswordChangeError = null;
        }).addCase(PostPasswordChange.rejected, (state, action) => {
            state.postPasswordChange = null;
            state.postPasswordChangeLoading =false;
            state.postPasswordChangeError = action.error.message;;
        }).addCase(PostPasswordChange.fulfilled, (state, action) => {
            state.postPasswordChange = action.payload;;
            state.postPasswordChangeLoading =false;
            state.postPasswordChangeError = null;
        })
        .addCase(PostGameDetailsBySportsId.pending, (state) => {
            state.PostGamesById = null;
            state.PostGamesByIdLoading =true;
            state.PostGamesByIdError = null;
        }).addCase(PostGameDetailsBySportsId.rejected, (state, action) => {
            state.PostGamesById = null;
            state.PostGamesByIdLoading =false;
            state.PostGamesByIdError = action.error.message;;
        }).addCase(PostGameDetailsBySportsId.fulfilled, (state, action) => {
            state.PostGamesById = action.payload;;
            state.PostGamesByIdLoading =false;
            state.PostGamesByIdError = null;
        })
        .addCase(PostBalance.pending, (state) => {
            state.PostTotalBalance = null;
            state.PostTotalBalanceLoading =true;
            state.PostTotalBalanceError = null;
        }).addCase(PostBalance.rejected, (state, action) => {
            state.PostTotalBalance = null;
            state.PostTotalBalanceLoading =false;
            state.PostTotalBalanceError = action.error.message;;
        }).addCase(PostBalance.fulfilled, (state, action) => {
            state.PostTotalBalance = action.payload;;
            state.PostTotalBalanceLoading =false;
            state.PostTotalBalanceError = null;
        })
        .addCase(PostGameDetailsByMI.pending, (state) => {
            // state.PostGameDetailsByMatchID = null;
            state.PostGameDetailsByMatchIDLoading =true;
            state.PostGameDetailsByMatchIDError = null;
        }).addCase(PostGameDetailsByMI.rejected, (state, action) => {
            state.PostGameDetailsByMatchID = null;
            state.PostGameDetailsByMatchIDLoading =false;
            state.PostGameDetailsByMatchIDError = action.error.message;;
        }).addCase(PostGameDetailsByMI.fulfilled, (state, action) => {
            state.PostGameDetailsByMatchID = action.payload;;
            state.PostGameDetailsByMatchIDLoading =false;
            state.PostGameDetailsByMatchIDError = null;
        })
        .addCase(PostGetStackApi.pending, (state) => {
            state.PostGetStack = null;
            state.PostGetStackLoading =true;
            state.PostGetStackError = null;
        }).addCase(PostGetStackApi.rejected, (state, action) => {
            state.PostGetStack = null;
            state.PostGetStackLoading =false;
            state.PostGetStackError = action.error.message;;
        }).addCase(PostGetStackApi.fulfilled, (state, action) => {
            state.PostGetStack = action.payload.data;
            state.PostGetStackLoading =false;
            state.PostGetStackError = null;
        })
        .addCase(PostEditStack.pending, (state) => {
            state.PostEditStack = null;
            state.PostEditStackLoading =true;
            state.PostEditStackError = null;
        }).addCase(PostEditStack.rejected, (state, action) => {
            state.PostEditStack = null;
            state.PostEditStackLoading =false;
            state.PostEditStackError = action.error.message;;
        }).addCase(PostEditStack.fulfilled, (state, action) => {
            state.PostEditStack = action.payload.data;
            state.PostEditStackLoading =false;
            state.PostEditStackError = null;
        })
        .addCase(PostBetListByMatchId.pending, (state) => {
            // state.PostBetListByMatchIdData = null;
            state.PostBetListByMatchIdDataLoading =true;
            state.PostBetListByMatchIdDataError = null;
        }).addCase(PostBetListByMatchId.rejected, (state, action) => {
            // state.PostBetListByMatchIdData = null;
            state.PostBetListByMatchIdDataLoading =false;
            state.PostBetListByMatchIdDataError = action.error.message;;
        }).addCase(PostBetListByMatchId.fulfilled, (state, action) => {
            state.PostBetListByMatchIdData = action.payload.data;
            state.PostBetListByMatchIdDataLoading =false;
            state.PostBetListByMatchIdDataError = null;
        })
        .addCase(PostTransferStatement.pending, (state) => {
            state.PostTransferStatementData = null;
            state.PostTransferStatementDataLoading =true;
            state.PostTransferStatementDataError = null;
        }).addCase(PostTransferStatement.rejected, (state, action) => {
            state.PostTransferStatementData = null;
            state.PostTransferStatementDataLoading =false;
            state.PostTransferStatementDataError = action.error.message;;
        }).addCase(PostTransferStatement.fulfilled, (state, action) => {
            state.PostTransferStatementData = action.payload.data;
            state.PostTransferStatementDataLoading =false;
            state.PostTransferStatementDataError = null;
        })
        .addCase(PostPlaceBet.pending, (state) => {
            state.PostBetingOnGameDetail = null;
            state.PostBetingOnGameDetailLoading =true;
            state.PostBetingOnGameDetailError = null;
        }).addCase(PostPlaceBet.rejected, (state, action) => {
            state.PostBetingOnGameDetail = null;
            state.PostBetingOnGameDetailLoading =false;
            state.PostBetingOnGameDetailError = action.error.message;;
        }).addCase(PostPlaceBet.fulfilled, (state, action) => {
            state.PostBetingOnGameDetail = action.payload.data;
            state.PostBetingOnGameDetailLoading =false;
            state.PostBetingOnGameDetailError = null;
        })
        .addCase(Postactivematchsport.pending, (state) => {
            state.Postmatchsport = null;
            state.PostmatchsportLoading =true;
            state.PostmatchsportError = null;
        }).addCase(Postactivematchsport.rejected, (state, action) => {
            state.Postmatchsport = null;
            state.PostmatchsportLoading =false;
            state.PostmatchsportError = action.error.message;;
        }).addCase(Postactivematchsport.fulfilled, (state, action) => {
            state.Postmatchsport = action.payload.data;
            state.PostmatchsportLoading =false;
            state.PostmatchsportError = null;
        })
        // .addCase(GetGeolocationPosition.pending, (state) => {
        //     state.GetGeolocationIP = null;
        //     state.GetGeolocationIPLoading =true;
        //     state.GetGeolocationIPError = null;
        // }).addCase(GetGeolocationPosition.rejected, (state, action) => {
        //     state.GetGeolocationIP = null;
        //     state.GetGeolocationIPLoading =false;
        //     state.GetGeolocationIPError = action.error.message;;
        // }).addCase(GetGeolocationPosition.fulfilled, (state, action) => {
        //     state.GetGeolocationIP = action.payload.data;
        //     state.GetGeolocationIPLoading =false;
        //     state.GetGeolocationIPError = null;
        // })
    }
});

export default authSlice.reducer