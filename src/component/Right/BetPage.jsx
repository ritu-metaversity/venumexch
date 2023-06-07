import React from 'react'
import "./BetPage.css"


const BetPage = () => {
    return (

        <div>
            <form>
                <div>
                    <div className="m-t-10 main_lay">
                        <div className='lay_div back'></div>
                        <h6 className="m-b-0 p-l-10 bet-type-info">Back</h6>
                    </div>
                    <div className="market-list">
                        <a href="/gamedetail/32354695" className="event-name router-link-exact-active router-link-active">
                            <span>England v Ireland</span></a>
                        <div className="bets-list">
                            <div className="bet back">
                                <span className="selected-nation">Ireland</span>
                                <div className="bet-fields m-b-10">
                                    <div className="odds-field placeholder-wrapper activated">
                                        <span className="placeholder">Odds</span>
                                        <div className="step-input-wrapper">
                                            <input type="" name="" placeholder="1.90" className="step-input" />
                                            <div className="button-wrapper"><button type="button" className="step-up">
                                                <i className="fas fa-angle-up angle-up"></i></button> <button type="button" className="step-down">
                                                    <i className="fas fa-angle-down angle-down"></i></button></div>
                                        </div>
                                    </div>
                                    <div className="placeholder-wrapper betslip-input">
                                        <input type="text" placeholder="Stake" name="betamount" />
                                    </div>
                                    <div className="info-field">
                                        <span className="title">Profit</span>
                                        <span className="value">0</span></div>
                                    <div className="control-fields">
                                        <button type="button" className="btn-remove btn-mini">
                                            <i className="fa fa-times">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div className="button-stakes back">
                                    <button type="button" className="btn btn-secondary">
                                        +22
                                    </button>
                                    <button type="button" className="btn btn-secondary">
                                        +5000
                                    </button>
                                    <button type="button" className="btn btn-secondary">
                                        +7000
                                    </button>
                                    <button type="button" className="btn btn-secondary">
                                        +10000
                                    </button>
                                    <button type="button" className="btn btn-secondary">
                                        +25000
                                    </button>
                                    <button type="button" className="btn btn-secondary">
                                        +50000
                                    </button>
                                    <button type="button" className="btn btn-link clear_btn" style={{ float: "right" }}>Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-t-10 main_lay">
                    <div className='lay_div lay'></div>
                    <h6 className="m-b-0 p-l-10 bet-type-info">Lay</h6>
                </div>
                <p className="summary-info">Liability: 0.00</p>
                <div className="summary-buttons text-right"><button type="button" className="btn btn-remove">Remove All</button> <button type="submit" className="btn prima">Place Bets</button></div>
                <label className="confirmation-checkbox"><input type="checkbox" /> <span>Confirm bets before placing</span></label>
            </form>
        </div>

    )
}

export default BetPage