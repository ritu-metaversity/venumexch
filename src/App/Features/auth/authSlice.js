import {createSlice} from '@reduxjs/toolkit'
import {getAllPostsComments ,getActiveSportList,postLogin,PostPwChangeFirstTime,PostPasswordChange,PostGameDetailsBySportsId,PostBalance,
    PostGameDetailsByMI,PostGetStackApi,PostEditStack,PostBetListByMatchId,PostTransferStatement,PostPlaceBet,Postactivematchsport,
    Postunsettleddddd,Postcasino,Postprofitlossmatchwise,postBetMarketAndUser,Postisselfbyappurl,Postdepsositrequestclient,Postpaymnetdetailapp,
    Postselfdepositapp,Postselfwithdrawapp,Postwithdrawrequestclient,Postvalidatejwttoken,Postuserselfregister,PostMinMaxGameDetails,PostUserOddPnl,PostUserfancypnl,
    Postuserfancybook,Postloginlogout} from './authActions' 

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

    getActiveSportListData:null,
    getActiveSportListDataLoading:false,
    getActiveSportListDataError:null,

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

    PostEditStackData:null,
    PostEditStackDataLoading:false,
    PostEditStackDataError:null,

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

    
    PostunsettledData:null,
    PostunsettledDataLoading:false,
    PostunsettledDataError:null,


    PostcasinoData:null,
    PostcasinoDataLoading:false,
    PostcasinoDataError:null,

    PostprofitlossmatchwiseDatatata:null,
    PostprofitlossmatchwiseDatatataLoading:false,
    PostprofitlossmatchwiseDatatataError:null,


    postBetMarketAndUserData:null,
    postBetMarketAndUserDataLoading:false,
    postBetMarketAndUserDataError:null,

    postisselfbyappurlData:null,
    postisselfbyappurlDataLoading:false,
    postisselfbyappurlDataError:null,

    PostdepsositrequestclientData:null,
    PostdepsositrequestclientDataLoading:false,
    PostdepsositrequestclientDataError:null,

    PostpaymnetdetailappDataData:null,
    PostpaymnetdetailappDataDataLoading:false,
    PostpaymnetdetailappDataDataError:null,

    PostselfdepositappData:null,
    PostselfdepositappDataLoading:false,
    PostselfdepositappDataError:null,

    PostselfwithdrawappData:null,
    PostselfwithdrawappDataLoading:false,
    PostselfwithdrawappDataError:null,

    PostwithdrawrequestclientData:null,
    PostwithdrawrequestclientDataLoading:false,
    PostwithdrawrequestclientDataError:null,

    PostvalidatejwttokenData:null,
    PostvalidatejwttokenDataLoading:false,
    PostvalidatejwttokenDataError:null,

    PostuserselfregisterData:null,
    PostuserselfregisterDataLoading:false,
    PostuserselfregisterDataError:null,

    PostMinMaxGameDetailsData:null,
    PostMinMaxGameDetailsDataLoading:false,
    PostMinMaxGameDetailsDataError:null,


    PostUserOddPnlData:null,
    PostUserOddPnlDataLoading:false,
    PostUserOddPnlDataError:null,

    PostUserfancypnlata:null,
    PostUserfancypnlataLoading:false,
    PostUserfancypnlataError:null,

    Postuserfancybookdata:null,
    PostuserfancybookdataLoading:false,
    PostuserfancybookdataError:null,

    Postloginlogoutdata:null,
    PostloginlogoutdataLoading:false,
    PostloginlogoutdataError:null,

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
        .addCase(getActiveSportList.pending, (state) => {
            state.getActiveSportListData = null;
            state.getActiveSportListDataLoading =true;
            state.getActiveSportListDataError = null;
        }).addCase(getActiveSportList.rejected, (state, action) => {
            state.getActiveSportListData = null;
            state.getActiveSportListDataLoading =false;
            state.getActiveSportListDataError = action.error.message;
        }).addCase(getActiveSportList.fulfilled, (state, action) => {
            state.getActiveSportListData = action.payload;
            state.getActiveSportListDataLoading =false;
            state.getActiveSportListDataError = null;
        })
        .addCase(PostPwChangeFirstTime.pending, (state) => {
            state.postFirstTimeLogin = null;
            state.postFirstTimeLoginLoading =true;
            state.postFirstTimeLoginError = null;
        }).addCase(PostPwChangeFirstTime.rejected, (state, action) => {
            state.postFirstTimeLogin = null;
            state.postFirstTimeLoginLoading =false;
            state.postFirstTimeLoginError = action.error.message;
        }).addCase(PostPwChangeFirstTime.fulfilled, (state, action) => {
            state.postFirstTimeLogin = action.payload;
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
            state.postPasswordChangeError = action.error.message;
        }).addCase(PostPasswordChange.fulfilled, (state, action) => {
            state.postPasswordChange = action.payload;
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
            state.PostGamesByIdError = action.error.message;
        }).addCase(PostGameDetailsBySportsId.fulfilled, (state, action) => {
            state.PostGamesById = action.payload;
            state.PostGamesByIdLoading =false;
            state.PostGamesByIdError = null;
        })
        .addCase(PostBalance.pending, (state) => {
            // state.PostTotalBalance = null;
            state.PostTotalBalanceLoading =true;
            state.PostTotalBalanceError = null;
        }).addCase(PostBalance.rejected, (state, action) => {
            state.PostTotalBalance = null;
            state.PostTotalBalanceLoading =false;
            state.PostTotalBalanceError = action.error.message;
        }).addCase(PostBalance.fulfilled, (state, action) => {
            state.PostTotalBalance = action.payload;
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
            state.PostGameDetailsByMatchIDError = action.error.message;
        }).addCase(PostGameDetailsByMI.fulfilled, (state, action) => {
            state.PostGameDetailsByMatchID = action.payload;
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
            state.PostGetStackError = action.error.message;
        }).addCase(PostGetStackApi.fulfilled, (state, action) => {
            state.PostGetStack = action.payload.data;
            state.PostGetStackLoading =false;
            state.PostGetStackError = null;
        })
        .addCase(PostEditStack.pending, (state) => {
            state.PostEditStackData = null;
            // state.PostEditStackDataLoading =true;
            state.PostEditStackDataError = null;
        }).addCase(PostEditStack.rejected, (state, action) => {
            state.PostEditStackData = null;
            // state.PostEditStackDataLoading =false;
            state.PostEditStackDataError = action.error.message;
        }).addCase(PostEditStack.fulfilled, (state, action) => {
            state.PostEditStackData = action.payload.data;
            state.PostEditStackDataLoading =false;
            state.PostEditStackDataError = null;
        })
        .addCase(PostBetListByMatchId.pending, (state) => {
            // state.PostBetListByMatchIdData = null;
            state.PostBetListByMatchIdDataLoading =true;
            state.PostBetListByMatchIdDataError = null;
        }).addCase(PostBetListByMatchId.rejected, (state, action) => {
            // state.PostBetListByMatchIdData = null;
            state.PostBetListByMatchIdDataLoading =false;
            state.PostBetListByMatchIdDataError = action.error.message;
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
            state.PostTransferStatementDataError = action.error.message;
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
            state.PostBetingOnGameDetailError = action.error.message;
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
            state.PostmatchsportError = action.error.message;
        }).addCase(Postactivematchsport.fulfilled, (state, action) => {
            state.Postmatchsport = action.payload.data;
            state.PostmatchsportLoading =false;
            state.PostmatchsportError = null;
        })
        .addCase(Postunsettleddddd.pending, (state) => {
            state.PostunsettledData = null;
            state.PostunsettledDataLoading =true;
            state.PostunsettledDataError = null;
        }).addCase(Postunsettleddddd.rejected, (state, action) => {
            state.PostunsettledData = null;
            state.PostunsettledDataLoading =false;
            state.PostunsettledDataError = action.error.message;
        }).addCase(Postunsettleddddd.fulfilled, (state, action) => {
            state.PostunsettledData = action.payload.data;
            state.PostunsettledDataLoading =false;
            state.PostunsettledDataError = null;
        })
        .addCase(Postcasino.pending, (state) => {
            state.PostcasinoData = null;
            state.PostcasinoDataLoading =true;
            state.PostcasinoDataError = null;
        }).addCase(Postcasino.rejected, (state, action) => {
            state.PostcasinoData = null;
            state.PostcasinoDataLoading =false;
            state.PostcasinoDataError = action.error.message;
        }).addCase(Postcasino.fulfilled, (state, action) => {
            state.PostcasinoData = action.payload.data;
            state.PostcasinoDataLoading =false;
            state.PostcasinoDataError = null;
        })
        .addCase(Postprofitlossmatchwise.pending, (state) => {
            state.PostprofitlossmatchwiseDatatata = null;
            state.PostprofitlossmatchwiseDatatataLoading =true;
            state.PostprofitlossmatchwiseDatatataError = null;
        }).addCase(Postprofitlossmatchwise.rejected, (state, action) => {
            state.PostprofitlossmatchwiseDatatata = null;
            state.PostprofitlossmatchwiseDatatataLoading =false;
            state.PostprofitlossmatchwiseDatatataError = action.error.message;
        }).addCase(Postprofitlossmatchwise.fulfilled, (state, action) => {
            state.PostprofitlossmatchwiseDatatata = action.payload.data;
            state.PostprofitlossmatchwiseDatatataLoading =false;
            state.PostprofitlossmatchwiseDatatataError = null;
        })
        .addCase(postBetMarketAndUser.pending, (state) => {
            state.postBetMarketAndUserData = null;
            state.postBetMarketAndUserDataLoading =true;
            state.postBetMarketAndUserDataError = null;
        }).addCase(postBetMarketAndUser.rejected, (state, action) => {
            state.postBetMarketAndUserData = null;
            state.postBetMarketAndUserDataLoading =false;
            state.postBetMarketAndUserDataError = action.error.message;
        }).addCase(postBetMarketAndUser.fulfilled, (state, action) => {
            state.postBetMarketAndUserData = action.payload.data;
            state.postBetMarketAndUserDataLoading =false;
            state.postBetMarketAndUserDataError = null;
        })
        .addCase(Postisselfbyappurl.pending, (state) => {
            state.postisselfbyappurlData = null;
            state.postisselfbyappurlDataLoading =true;
            state.postisselfbyappurlDataError = null;
        }).addCase(Postisselfbyappurl.rejected, (state, action) => {
            state.postisselfbyappurlData = null;
            state.postisselfbyappurlDataLoading =false;
            state.postisselfbyappurlDataError = action.error.message;
        }).addCase(Postisselfbyappurl.fulfilled, (state, action) => {
            state.postisselfbyappurlData = action.payload.data;
            state.postisselfbyappurlDataLoading =false;
            state.postisselfbyappurlDataError = null;
        })
        .addCase(Postdepsositrequestclient.pending, (state) => {
            state.PostdepsositrequestclientData = null;
            state.PostdepsositrequestclientDataLoading =true;
            state.PostdepsositrequestclientDataError = null;
        }).addCase(Postdepsositrequestclient.rejected, (state, action) => {
            state.PostdepsositrequestclientData = null;
            state.PostdepsositrequestclientDataLoading =false;
            state.PostdepsositrequestclientDataError = action.error.message;
        }).addCase(Postdepsositrequestclient.fulfilled, (state, action) => {
            state.PostdepsositrequestclientData = action.payload.data;
            state.PostdepsositrequestclientDataLoading =false;
            state.PostdepsositrequestclientDataError = null;
        })
        .addCase(Postpaymnetdetailapp.pending, (state) => {
            state.PostpaymnetdetailappDataData = null;
            state.PostpaymnetdetailappDataDataLoading =true;
            state.PostpaymnetdetailappDataDataError = null;
        }).addCase(Postpaymnetdetailapp.rejected, (state, action) => {
            state.PostpaymnetdetailappDataData = null;
            state.PostpaymnetdetailappDataDataLoading =false;
            state.PostpaymnetdetailappDataDataError = action.error.message;
        }).addCase(Postpaymnetdetailapp.fulfilled, (state, action) => {
            state.PostpaymnetdetailappDataData = action.payload.data;
            state.PostpaymnetdetailappDataDataLoading =false;
            state.PostpaymnetdetailappDataDataError = null;
        })

        .addCase(Postselfdepositapp.pending, (state) => {
            state.PostselfdepositappData = null;
            state.PostselfdepositappDataLoading =true;
            state.PostselfdepositappDataError = null;
        }).addCase(Postselfdepositapp.rejected, (state, action) => {
            state.PostselfdepositappData = null;
            state.PostselfdepositappDataLoading =false;
            state.PostselfdepositappDataError = action.error.message;
        }).addCase(Postselfdepositapp.fulfilled, (state, action) => {
            state.PostselfdepositappData = action.payload.data;
            state.PostselfdepositappDataLoading =false;
            state.PostselfdepositappDataError = null;
        })

        .addCase(Postselfwithdrawapp.pending, (state) => {
            state.PostselfwithdrawappData = null;
            state.PostselfwithdrawappDataLoading =true;
            state.PostselfwithdrawappDataError = null;
        }).addCase(Postselfwithdrawapp.rejected, (state, action) => {
            state.PostselfwithdrawappData = null;
            state.PostselfwithdrawappDataLoading =false;
            state.PostselfwithdrawappDataError = action.error.message;
        }).addCase(Postselfwithdrawapp.fulfilled, (state, action) => {
            state.PostselfwithdrawappData = action.payload.data;
            state.PostselfwithdrawappDataLoading =false;
            state.PostselfwithdrawappDataError = null;
        })

        .addCase(Postwithdrawrequestclient.pending, (state) => {
            state.PostwithdrawrequestclientData = null;
            state.PostwithdrawrequestclientDataLoading =true;
            state.PostwithdrawrequestclientDataError = null;
        }).addCase(Postwithdrawrequestclient.rejected, (state, action) => {
            state.PostwithdrawrequestclientData = null;
            state.PostwithdrawrequestclientDataLoading =false;
            state.PostwithdrawrequestclientDataError = action.error.message;
        }).addCase(Postwithdrawrequestclient.fulfilled, (state, action) => {
            state.PostwithdrawrequestclientData = action.payload.data;
            state.PostwithdrawrequestclientDataLoading =false;
            state.PostwithdrawrequestclientDataError = null;
        })
        .addCase(Postvalidatejwttoken.pending, (state) => {
            state.PostvalidatejwttokenData = null;
            state.PostvalidatejwttokenDataLoading =true;
            state.PostvalidatejwttokenDataError = null;
        }).addCase(Postvalidatejwttoken.rejected, (state, action) => {
            state.PostvalidatejwttokenData = null;
            state.PostvalidatejwttokenDataLoading =false;
            state.PostvalidatejwttokenDataError = action.error.message;
        }).addCase(Postvalidatejwttoken.fulfilled, (state, action) => {
            state.PostvalidatejwttokenData = action.payload.status;
            state.PostvalidatejwttokenDataLoading =false;
            state.PostvalidatejwttokenDataError = null;
        })
        .addCase(Postuserselfregister.pending, (state) => {
            state.PostuserselfregisterData = null;
            state.PostuserselfregisterDataLoading =true;
            state.PostuserselfregisterDataError = null;
        }).addCase(Postuserselfregister.rejected, (state, action) => {
            state.PostuserselfregisterData = null;
            state.PostuserselfregisterDataLoading =false;
            state.PostuserselfregisterDataError = action.error.message;
        }).addCase(Postuserselfregister.fulfilled, (state, action) => {
            state.PostuserselfregisterData = action.payload.data;
            state.PostuserselfregisterDataLoading =false;
            state.PostuserselfregisterDataError = null;
        })
        .addCase(PostMinMaxGameDetails.pending, (state) => {
            state.PostMinMaxGameDetailsData = null;
            state.PostMinMaxGameDetailsDataLoading =true;
            state.PostMinMaxGameDetailsDataError = null;
        }).addCase(PostMinMaxGameDetails.rejected, (state, action) => {
            state.PostMinMaxGameDetailsData = null;
            state.PostMinMaxGameDetailsDataLoading =false;
            state.PostMinMaxGameDetailsDataError = action.error.message;
        }).addCase(PostMinMaxGameDetails.fulfilled, (state, action) => {
            state.PostMinMaxGameDetailsData = action.payload.data;
            state.PostMinMaxGameDetailsDataLoading =false;
            state.PostMinMaxGameDetailsDataError = null;
        })
        .addCase(PostUserOddPnl.pending, (state) => {
            state.PostUserOddPnlData = null;
            state.PostUserOddPnlDataLoading =true;
            state.PostUserOddPnlDataError = null;
        }).addCase(PostUserOddPnl.rejected, (state, action) => {
            state.PostUserOddPnlData = null;
            state.PostUserOddPnlDataLoading =false;
            state.PostUserOddPnlDataError = action.error.message;
        }).addCase(PostUserOddPnl.fulfilled, (state, action) => {
            state.PostUserOddPnlData = action.payload.data;
            state.PostUserOddPnlDataLoading =false;
            state.PostUserOddPnlDataError = null;
        })
        .addCase(PostUserfancypnl.pending, (state) => {
            state.PostUserfancypnlata = null;
            state.PostUserfancypnlataLoading =true;
            state.PostUserfancypnlataError = null;
        }).addCase(PostUserfancypnl.rejected, (state, action) => {
            state.PostUserfancypnlata = null;
            state.PostUserfancypnlataLoading =false;
            state.PostUserfancypnlataError = action.error.message;
        }).addCase(PostUserfancypnl.fulfilled, (state, action) => {
            state.PostUserfancypnlata = action.payload.data;
            state.PostUserfancypnlataLoading =false;
            state.PostUserfancypnlataError = null;
        })
        .addCase(Postuserfancybook.pending, (state) => {
            state.Postuserfancybookdata = null;
            state.PostuserfancybookdataLoading =true;
            state.PostuserfancybookdataError = null;
        }).addCase(Postuserfancybook.rejected, (state, action) => {
            state.Postuserfancybookdata = null;
            state.PostuserfancybookdataLoading =false;
            state.PostuserfancybookdataError = action.error.message;
        }).addCase(Postuserfancybook.fulfilled, (state, action) => {
            state.Postuserfancybookdata = action.payload.data;
            state.PostuserfancybookdataLoading =false;
            state.PostuserfancybookdataError = null;
        })
        .addCase(Postloginlogout.pending, (state) => {
            state.Postloginlogoutdata = null;
            state.PostloginlogoutdataLoading =true;
            state.PostloginlogoutdataError = null;
        }).addCase(Postloginlogout.rejected, (state, action) => {
            state.Postloginlogoutdata = null;
            state.PostloginlogoutdataLoading =false;
            state.PostloginlogoutdataError = action.error.message;
        }).addCase(Postloginlogout.fulfilled, (state, action) => {
            state.Postloginlogoutdata = action.payload.data;
            state.PostloginlogoutdataLoading =false;
            state.PostloginlogoutdataError = null;
        })

    }
});

export default authSlice.reducer