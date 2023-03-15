import React from "react";
import { useState } from "react";
import "./Rules.css";

const Rules = () => {

    const [Fancy,setFancy]=useState(false)
    const [LunchFavourite,setLunchFavourite]=useState(false)
    const [FancyMarket1,setFancyMarket1]=useState(false)
    const [Election,setElection]=useState(false)
    const [Khado,setKhado]=useState(false)
    const [BigBashLeague,setBigBashLeague]=useState(false)
    const [Caribbean,setCaribbean]=useState(false)
    const [IPL,setIPL]=useState(false)
    const [Bookmaker,setBookmaker]=useState(false)
    const [FootballFancy,setFootballFancy]=useState(false)
    const [Betfair,setBetfair]=useState(false)
    const [Kabaddi,setKabaddi]=useState(false)
    const [Football,setFootball]=useState(false)
    const [Tennis,setTennis]=useState(false)

    const handleInput =(e)=>{
        let id = e.target.id
        // console.log(id)
    }
  return (
    <div>
      <div data-v-eba495a4="">
        <div data-v-eba495a4="" role="tablist">
          <div data-v-eba495a4="" id="accordion" style={{paddingTop: "91px"}}>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading0">
                <button onClick={handleInput }
                id="Fancy"
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse0"
                  aria-expanded="true"
                  aria-controls="collapse0"
                  class="btn btn-submit btn-block    "
                >
                  Fancy
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse0"
                aria-labelledby="heading0"
                data-parent="#accordion"
                class="collapse show"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              1. All fancy bets will be validated when match has
                              been tied.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              2. All advance fancy will be suspended before toss
                              or weather condition.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              3. In case technical error or any circumstances
                              any fancy is suspended and does not resume result
                              will be given all previous bets will be valid
                              (based on haar/jeet).
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              4. If any case wrong rate has been given in fancy
                              that particular bets will be cancelled.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              5. In any circumstances management decision will
                              be final related to all exchange items. Our
                              scorecard will be considered as valid if there is
                              any mismatch in online portal.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              6. In case customer make bets in wrong fancy we
                              are not liable to delete, no changes will be made
                              and bets will be consider as confirm bet.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              7. Due to any technical error market is open and
                              result has came all bets after result will be
                              deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              8. Manual bets are not accepted in our exchange.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              9.Our exchange will provide 5 second delay in our
                              tv.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              10. Company reserves the right to suspend/void any
                              id/bets if the same is found to be illegitimate.
                              For example incase of vpn/robot-use/multiple entry
                              from same IP/ multiple bets at same time
                              (Punching) and others. Note : only winning bets
                              will be voided, For example: If we find such
                              entries (above mentioned) from any id and their
                              bets are (200000 lay in a 6 over session for the
                              rate 40 and 200000 back for the rate of 48) and
                              the actual score is 38, bets of 40 lay will be
                              voided and the bets for 48 back will be considered
                              valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              11. Company reserves the right to void any bets
                              (only winning bets) of any event at any point of
                              the match if the company believes there is any
                              cheating/wrong doing in that particular event by
                              the players (either batsman/bowler).
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              12. Once our exchange give username and password
                              it is your responsibility to change a password.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              13. Penalty runs will not be counted in any fancy.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              14. Warning:- live scores and other data on this
                              site is sourced from third party feeds and may be
                              subject to time delays and/or be inaccurate. If
                              you rely on this data to place bets, you do so at
                              your own risk. Our exchange does not accept
                              responsibility for loss suffered as a result of
                              reliance on this data.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              15.Traders will be block the user ID if find any
                              misinterpret activities, No queries accept
                              regarding.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              16. Our exchange is not responsible for misuse of
                              client id.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Test
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              1 Session:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.1 Complete session valid in test.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.2 Middle session and Session is not completed
                              due to Innings declared or all out so that
                              particular over considered as completed and
                              remaining over counted in next team Innings for
                              ex:- In case of Innings declared or all out In
                              131.5th over Considered as 132 over completed
                              remaining 1 over counted for 133 over middle
                              session and 3 over counted for 135 over session
                              from next team Innings and One over session and
                              Only over session is not completed due to innings
                              declared so that Particular over session bets will
                              be deleted and all out considered as valid for
                              ex:- In case of Innings declared In 131.5th over
                              so 132 over will be deleted and if all out then
                              132 over and Only 132 over will be Valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.3 1st day 1st session run minimum 25 over will
                              be played then result is given otherwise 1st day
                              1st session will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.4 1st day 2nd session run minimum 25 over will
                              be played then result is given otherwise 1st day
                              2nd session will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.5 1st day total run minimum 80 over will be
                              played then result is given otherwise 1st day
                              total run will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.6 Test match both advance session is valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              2 Test lambi/ Inning run:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2.1 Mandatory 70 over played in test lambi paari/
                              Innings run. If any team all-out or declaration
                              lambi paari/ innings run is valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2.2 In case due to weather situation match has
                              been stopped all lambi trades will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2.3 In test both lambi paari / inning run is valid
                              in advance fancy.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              3 Test batsman:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3.1 In case batsmen is injured he/she is made 34
                              runs the result will be given 34 runs.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3.2 Batsman 50/100 run if batsman is injured or
                              declaration the result will be given on particular
                              run.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3.3 In next men out fancy if player is injured
                              particular fancy will be deleted
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3.4 In advance fancy opening batsmen is only valid
                              if same batsmen came in opening the fancy will be
                              valid in case one batsmen is changed that
                              particular player fancy will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3.5 Test match both advance fancy batsmen run is
                              valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              4 Test partnership:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              4.1 In partnership one batsman is injured
                              partnership is continued in next batsman.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              4.2 Partnership and player runs due to weather
                              condition or match abandoned the result will be
                              given as per score.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              4.3 Advance partnership is valid in case both
                              players are different or same.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              4.4 Test match both advance fancy partnership is
                              valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              5 Other fancy advance (test):-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              5.1 Four, sixes, wide, wicket, extra run, total
                              run, highest over and top batsmen is valid only if
                              300 overs has been played or the match has been
                              won by any team otherwise all these fancy will be
                              deleted. Additionally all events are valid only
                              for 1st innings( this is applicable to all
                              individual team events also)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Odi rule:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Session:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Match 1st over run advance fancy only 1st innings
                              run will be counted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Complete session is valid in case due to rain or
                              match abandoned particular session will be
                              deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              For example:- 35 over run team a is playing any
                              case team A is all-out in 33 over team a has made
                              150 run the session result is validated on
                              particular run.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Advance session is valid in only 1st innings.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              50 over runs:
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In case 50 over is not completed all bet will be
                              deleted due to weather or any condition.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Advance 50 over runs is valid in only 1st innings.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Odi batsman runs:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In case batsman is injured he/she is made 34 runs
                              the result will be given 34 runs.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In next men out fancy if player is injured
                              particular fancy will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In advance fancy opening batsmen is only valid if
                              same batsmen came in opening the fancy will be
                              valid in case one batsmen is changed that
                              particular player fancy will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Odi partnership runs:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In partnership one batsman is injured partnership
                              is continued in next batsman.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Advance partnership is valid in case both players
                              are different or same.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both team advance partnerships are valid in
                              particular match.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Other fancy:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Four, sixes, wide, wicket, extra run, total run,
                              highest over ,top batsman,maiden
                              over,caught-out,no-ball,run-out,fifty and century
                              are valid only match has been completed in case
                              due to rain over has been reduced all other fancy
                              will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              T20:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Session:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Match 1st over run advance fancy only 1st innings
                              run will be counted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Complete session is valid in case due to rain or
                              match abandoned particular session will be
                              deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              For example :- 15 over run team a is playing any
                              case team a is all-out in 13 over team A has made
                              100 run the session result is validated on
                              particular run.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Advance session is valid in only 1st innings.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              20 over runs:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Advance 20 over run is valid only in 1st innings.
                              20 over run will not be considered as valid if 20
                              overs is not completed due to any situation.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              T20 batsman runs:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In case batsman is injured he/she is made 34 runs
                              the result will be given 34 runs.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In next men out fancy if player is injured
                              particular fancy will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In advance fancy opening batsmen is only valid if
                              same batsmen came in opening the fancy will be
                              valid in case one batsmen is changed that
                              particular player fancy will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              T20 partnership runs:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In partnership one batsman is injured partnership
                              is continued in next batsman.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Advance partnership is valid in case both players
                              are different or same.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both team advance partnerships are valid in
                              particular match.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              1st 2 &amp; 3 Wickets runs:- T20/ODI
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Advance event is valid in only 1st Innings.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              If over reduced due to rain or weather condition
                              or match abandoned the result will be given as per
                              score.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Other fancy:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              T-20 ,one day and test match in case current
                              innings player and partnership are running in
                              between match has been called off or abandoned
                              that situation all current player and partnership
                              results are valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Four, sixes, wide, wicket, extra run, total run,
                              highest over and top batsman,maiden
                              over,caught-out,no-ball,run-out,fifty and century
                              are valid only match has been completed in case
                              due to rain over has been reduced all other fancy
                              will be deleted. 1st 6 over dot ball and 20 over
                              dot ball fancy only valid is 1st innings.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1st wicket lost to any team balls meaning that any
                              team 1st wicket fall down in how many balls that
                              particular fancy at least minimum one ball have to
                              be played otherwise bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1st wicket lost to any team fancy valid both
                              innings.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              How many balls for 50 runs any team meaning that
                              any team achieved 50 runs in how many balls that
                              particular fancy at least one ball have to be
                              played otherwise that fancy bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              How many balls for 50 runs fancy any team only
                              first inning valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1st 6 inning boundaries runs any team fancy will
                              be counting only according to run scored fours and
                              sixes at least 6 over must be played otherwise
                              that fancy will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1st inning 6 over boundaries runs any team run
                              like wide ,no-ball ,leg-byes ,byes and over throw
                              runs are not counted this fancy.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              How many balls face any batsman meaning that any
                              batsman how many balls he/she played that
                              particular fancy at least one ball have to be
                              played otherwise that fancy bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              How many balls face by any batsman both innings
                              valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Lowest scoring over will be considered valid only
                              if the over is completed fully (all six deliveries
                              has to be bowled)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Concussion in Test:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets of one over session will be deleted in
                              test scenario, in case session is incomplete. For
                              example innings declared or match suspended to bad
                              light or any other conditions.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1. All bets will be considered as valid if a
                              player has been replaced under concussion
                              substitute, result will be given for the runs
                              scored by the mentioned player. For example DM
                              Bravo gets retired hurt at 23 runs, then result
                              will be given for 23.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2. Bets of both the player will be valid under
                              concussion substitute.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Total Match- Events (test):-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Minimum of 300 overs to be bowled in the entire
                              test match, otherwise all bets related to the
                              particular event will get void. For example, Total
                              match caught outs will be valid only if 300 overs
                              been bowled in the particular test match
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Limited over events-Test:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              This event will be considered valid only if the
                              number of overs defined on the particular event
                              has been bowled, otherwise all bets related to
                              this event will get void. For example 0-25 over
                              events will be valid only if 25 overs has been
                              bowled, else the same will not be considered as
                              valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              If the team gets all out prior to any of the
                              defined overs, then balance overs will be counted
                              in next innings. For example if the team gets all
                              out in 23.1 over the same will be considered as 24
                              overs and the balance overs will be counted from
                              next innings.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Bowler Wicket event's- Test:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Minimum of one legal over (one complete over) has
                              to be bowled by the bowler mentioned in the event,
                              else the same will not be considered as valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Bowler over events- Test:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              The mentioned bowler has to complete the defined
                              number of overs, else the bets related to that
                              particular event will get void. For example if the
                              mentioned bowler has bowled 8 overs, then 5 over
                              run of that particular bowler will be considered
                              as valid and the 10 over run will get void.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Player ball event's- Test:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              This event will be considered valid only if the
                              defined number of runs made by the mentioned
                              player, else the result will be considered as 0
                              (zero) balls.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              For example if Root makes 20 runs in 60 balls and
                              gets out on 22 runs, result for 20 runs will be 60
                              balls and the result for balls required for 25 run
                              Root will be considered as 0 (Zero) and the same
                              will be given as result.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Limited over events-ODI:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              This event will be considered valid only if the
                              number of overs defined on the particular event
                              has been bowled, otherwise all bets related to
                              this event will get void. 0-50 over events will be
                              valid only if 50 over completed, if the team
                              batting first get all out prior to 50 over the
                              balance over will be counted from second innings.
                              For example if team batting first gets all out in
                              35 over balance 15 over will be counted from
                              second innings, the same applies for all events if
                              team gets all out before the defined number of
                              overs.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              The events which remains incomplete will be voided
                              if over gets reduced in the match due to any
                              situation, for example if match interrupted in 15
                              overs due to rain/badlight and post this over gets
                              reduced. Events for 0-10 will be valid, all other
                              events related to this type will get deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              This events will be valid only if the defined
                              number of over is completed. For example team
                              batting first gets all out in 29.4 over then the
                              same will be considered as 30 over, the team
                              batting second must complete 20 overs only then
                              0-50 over events will be considered as valid. In
                              case team batting second gets all out in 19.4 over
                              then 0-50 over event will not be considered as
                              valid, This same is valid for 1st Innings only.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Bowler event- ODI:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              The mentioned bowler has to complete the defined
                              number of overs, else the bets related to that
                              particular event will get void. For example if the
                              mentioned bowler has bowled 8 overs, then 5 over
                              run of that particular bowler will be considered
                              as valid and the 10 over run will get void.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both innings are valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Other event:- T20
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              The events for 1-10 over and 11-20 over will be
                              considered valid only if the number of over
                              mentioned has been played completely. However if
                              the over got reduced before the particular event
                              then the same will be voided, if the team batting
                              first get all out prior to 20 over the balance
                              over will be counted from second innings. For
                              example if team batting first gets all out in 17
                              over balance 3 over will be counted from second
                              innings and that 3 over all events are counted.
                              This same is valid for 1st Innings only.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              If over got reduced in between any running event,
                              then the same will be considered valid and the
                              rest will be voided. For example.., match started
                              and due to rain/bad light or any other situation
                              match got interrupted at 4 over and later over got
                              reduced. Then events for 1-10 is valid rest all
                              will be voided.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Bowler Session: Bowler session advance events only
                              valid for 1st inning. This event is valid only if
                              the bowler has completed his maximum quota of
                              overs, else the same will be voided. However if
                              the match has resulted and the particular bowler
                              has already started bowling his final over then
                              result will be given even if he haven't completed
                              the over. For example B Kumar is bowling his final
                              over and at 3.4 the match has resulted then result
                              will be given for B Kumar over runs.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Incase of DLS, the over got reduced then the
                              bowler who has already bowled his maximum quota of
                              over that result will be considered as valid and
                              the rest will be voided.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Boundary on Match 1st Free hit
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both innings are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Boundary hit on Free hit only be considered as
                              valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Bets will be deleted if there is no Free hit in
                              the mentioned match
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Boundary by bat will be considered as valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Boundaries by Player
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both Four and six are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Any query regarding result or rate has to be
                              contacted within 7 days from the event, query
                              after 7 days from the event will not be considered
                              as valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Virtual Cricket
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Scorecard available on the video will be
                              considered as valid. At any situation, if there is
                              a difference between the scorecard in the website
                              and the scorecard available on video. Score card
                              available on video will be valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In case of any technical issues the video gets
                              interrupted/stopped and the same cannot be
                              continued, the existing markets will be voided.
                              However the markets which are already
                              finished/settled will remain valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              CPL:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              If CPL fixture 0f 33 matches gets reduced due to
                              any reason, then all the special fancies will be
                              voided (Match abandoned due to rain/bad light will
                              not be considered in this)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Fancy based on all individual teams are valid only
                              for league stage
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total 1st over runs: Average 6 runs will be given
                              in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total fours: Average 22 fours will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total sixes: Average 13 sixes will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Wickets - Average will 13 Wickets be given
                              in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Wides - Average 10 wides will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Extras - Average 18 extras will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total No ball - Average 1 no ball will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Fifties - Average 1 fifties will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Caught outs: Average 9 caught out will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Management decision will be final
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest innings run - Only first innings is valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Lowest innings run - Only first innings is valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest over run: Both innings are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest 1st over run in individual match: Both
                              innings are valid, however for CPL we have created
                              the fancy for 1st innings only
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Fours in individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Sixes in individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Extras in individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Wicket in individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Super over will not be included
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Barbados Tridents
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Opening partnership run: Average 24 runs will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              First 6 over run: Average 45 run will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              St Kitts and Nevis Patriots
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Opening partnership run: Average 25 runs will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              First 6 over run: Average 45 run will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Trinbago Knight Riders
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Opening partnership run: Average 22 runs will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              First 6 over run: Average 46 run will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Guyana Amazon Warriors
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Opening partnership run: Average 23 runs will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              First 6 over run: Average 44 run will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              St Lucia Zouks
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Opening partnership run: Average 22 runs will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              First 6 over run: Average 43 run will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Jamaica Tallawahs
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Opening partnership run: Average 24 runs will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              First 6 over run: Average 46 run will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Tour Special Events
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Australia tour of Sri Lanka, 2022
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              If first match of tour (T20 or ODI) cancelled or
                              over reduce in first match, then all special fancy
                              events will be deleted
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              If First match played completely and next match
                              gets over reduced or cancelled, then that match
                              bets all bets will be deleted and first match bets
                              will be valid and average will count in other bets
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Ex. : First match total 4's is 20 and second match
                              over reduced so bets after first match upto second
                              match started that all deleted and for other bets
                              average counted total 4's is 24 and third match
                              total 4's is 26, So Result of Total 4's is 7
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              T20 :
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Matches 1st over runs : Average 6 runs will
                              be given in case match abandoned or over reduced
                              (only 1st innings valid)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Matches 1st 6 over runs : Average 45 runs
                              will be given in case match abandoned or over
                              reduced (Only 1st Innings valid)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total fours: Average 24 fours will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total sixes: Average 9 sixes will be given in case
                              match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Boundaries: Average 33 Boundaries will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Fifties - Average 2 Fifties will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Wickets - Average 12 Wickets will be given
                              in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Wides - Average 8 Wides will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Extras - Average 15 Extras will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Caught outs: Average 8 Caught out will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Bowled:- Average 2 Bowled out will be given
                              in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total LBW:- Average 2 LBW will be given in case
                              match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Run out:- Average 1 Run out will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Most runs given by Bowler in an Inning of Tour :
                              Maximum How much Runs conceded by a individual
                              Bowler in an Innings. Ex : For T20I How much runs
                              conceded by a bowler in his 4 overs Quota.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest total runs in individual match of IPL :
                              Maximum Total runs of both Teams in individual
                              match.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest innings run - Only first inning is valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Partnership - Both innings are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest 1st over run of individual match: only
                              first inning is valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Fours of individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Sixes of individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Extras of individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest over run: Both innings are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Top Batsman Runs in Tour : Most runs by an
                              Individual Player in any Individual matches in
                              ODI/T20I Format of Tour
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Wickets by Bowler in Tour : Most Wickets
                              taken by Individual Player in Overall ODI/T20I
                              Format of Tour
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Over runs in Tour : Most Runs Scored in
                              Any Single Over of any Individual Match in Overall
                              ODI/T20I Format of Tour
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Player Total Runs : Total Runs Scored by an
                              Individual Player in Full ODI/T20I Format of Tour
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Player Total 4s : Total 4s Hitted by an Individual
                              Player in Full ODI/T20I Format of Tour
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Player Total 6s : Total 6s Hitted by an Individual
                              Player in Full ODI/T20I Format of Tour
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Player Boundaries : Total Boundaries Hitted by an
                              Individual Player in Full ODI/T20I Format of Tour
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              For Player based Events, If any Player not in
                              playing 11 suppose First match any player played
                              completely but if same player not available in
                              next match, then that match bets all bets will be
                              deleted and first match bets will be valid and
                              average will count in other bets
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              If any one match not in Playing 11 means Average
                              Given for that match
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Average For Players:
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              A Finch Total Runs, Boundaries, 4s and 6s : 26,4,3
                              &amp; 1.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              D Warner Total Runs, Boundaries, 4s and 6s :
                              28,5,4&amp; 1.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              P Nissanka Total Runs, Boundaries, 4s and 6s :
                              22,3,2 &amp; 1.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              D Gunathilaka Total Runs, Boundaries, 4s and 6s :
                              23,3,2 &amp; 1.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              J Hazlewood,M Starc,D Chameera &amp; M Theekshana
                              : 2 wkts Average given if player not in playing
                              11.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading1">
                <button onClick={handleInput }
                id="LunchFavourite" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse1"
                  aria-controls="collapse1"
                  class="btn btn-submit btn-block collapsed"
                  aria-expanded="false"
                >
                  Lunch Favourite
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse1"
                aria-labelledby="heading1"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              1. THE TEAM WHICH IS FAVOURITE AT LUNCH WILL BE
                              CONSIDERED AS LUNCH FAVOURITE OR THE TEAM WHICH IS
                              FAVOURITE AFTER FIRST INNING LAST BALL WILL BE
                              CONSIDERED AS LUNCH FAVOURITE IN OUR EXCHANGE .
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              2. IN ANY CIRCUMSTANCES MANAGEMENT DECISION WILL
                              BE FINAL.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              3. IN CASE OF TIE IN T20 OR ONE DAY IN LUNCH
                              FAVOURITE GAME , ALL BETS WILL BE DELETED IN OUR
                              EXCHANGE.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              4. IN CASE OVERS ARE REDUCED IN A MATCH,THE TEAM
                              WHICH FAVOURITE AT LUNCH WILL BE CONSIDERED AS
                              LUNCH FAVOURITE.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              4.1 FOR EXAMPLE :- IF MATCH IS REDUCED TO 18 OVER
                              PER SIDE IN T20 OR ONEDAY THEN AFTER 18 OVER THE
                              TEAM WHICH IS FAVOURITE AT LUNCH WILL BE
                              CONSIDERED AS LUNCH FAVOURITE.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              5. IN CASE OF WEATHER, 1ST INNINGS MATCH OVERS ARE
                              REDUCED AND DIRECT TARGET IS GIVEN TO TEAM WHICH
                              WILL BAT IN 2ND INNING THEN LUNCH FAVOURITE WILL
                              BE CONSIDERED AFTER TARGET IS GIVEN AT LUNCH.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              5.1 FOR EXAMPLE :- IN T20 MATCH RAIN COMES AT 14
                              OVER AND MATCH IS INTERRUPTED DUE TO RAIN AND
                              DIRECT TARGET IS GIVEN TO 2ND BATTING TEAM, THEN
                              TEAM WHICH IS FAVOURITE IN MATCH ODDS AFTER TARGET
                              IS GIVEN IN MATCH, WILL BE CONSIDERED AS LUNCH
                              FAVOURITE.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading2">
                <button onClick={handleInput }
                id="FancyMarket1" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse2"
                  aria-controls="collapse2"
                  class="btn btn-submit btn-block collapsed"
                  aria-expanded="false"
                >
                  Fancy Market 1
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse2"
                aria-labelledby="heading2"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              1. Even odd game betting rate rules.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.1 Completed game is valid , in case due to rain
                              over are reduced or match abandoned particular
                              game will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.2 All bets regarding to ODD/EVEN
                              player/partnership are valid if one legal delivery
                              is being played, else the bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.3 All bets regarding Odd/Even sessions will be
                              deleted if the particular session is incomplete,
                              for example match got abandoned or finished before
                              the end of particular session.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1.4 In any circumstances management decision will
                              be final.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              2 Top batsman rules:-
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              2.1 If any player does not come as per playing
                              eleven then all bets will be get deleted for the
                              particular player.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2.2 two players done the same run in a single
                              match (M Agarwal 30 runs and A Rayudu 30 runs,
                              whole inning top batsmen score also 30 run) then
                              both player settlement to be get done 50 percent
                              (50% , 50%)rate on their original value which
                              given by our exchange.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Suppose we have opened value of M Agarwal 3.75
                              back and customer place bets on 10000 @ 3.75 rates
                              and A Rayudu 3.0 back and customer place bets on
                              10000 @ 3.0 rates.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Whole inning result announces 30 run by both
                              player then
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Rule of top batsman:-if you bet on M Agarwal you
                              will be get half amount of this rate
                              (10000*3.75/2=18750 you will get)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Rule of top batsman:-if you bet on A Rayudu you
                              will be get half amount of this rate
                              (10000*3.00/2=15000 you will get)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Top batsman only 1st inning valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              For one day 50 over and for t-20 match 20 over
                              must be played for top batsmen otherwise all bets
                              will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Man of the Match Rules
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1. All bets will be deleted in case the match is
                              abandoned or over reduced.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2. All bets will be deleted if the mentioned
                              player is not included in playing 11.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3. In case Man of the Match is shared between two
                              players then Dead heat rule will be applicable,
                              For example K Perera and T Iqbal shares the Man of
                              the Match, then the settlement will be done 50% of
                              the rates accordingly.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              4. Rules similar to our Top Batsman rules.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Maximum Sixes by Team
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1. All bets will be deleted if match abandoned or
                              over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2. All bets will be deleted if both the teams hits
                              same number of sixes.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3. Super over will not be considered.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Maximum 6 or 10 over runs
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1. All bets will be deleted if match abandoned or
                              over reduced.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2. All the bets will be deleted if both the teams
                              score is same (Runs scored in 6 or 10 overs)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3. 6 overs for T20 and 10 overs for ODI
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              4. Both the innings are valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              5. This fancy will be valid for 1st 6 overs of
                              both innings for T20 and 1st 10 overs of both
                              innings for ODI
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Batsman Match
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Batsman Match:- Bets for Favourite batsman from
                              the two batsman matched.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if any one of the
                              mentioned player is not included in playing 11.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted unless one ball being
                              played by both the mentioned players.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if over reduced or Match
                              abandoned.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if both the player scored
                              same run. For example H Amla and J Bairstow are
                              the batsman matched, H Amla and J Bairstow both
                              scored 38 runs then all bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both innings will be valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Opening Pair
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1. Bets for Favourite opening pair from the two
                              mentioned opening pair.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2. Runs made by both the opening player will be
                              added. For example:- J Roy scored 20 runs and J
                              Bairstow scored 30 runs result will be 50 runs.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              3. Highest run made by the pair will be declared
                              as winner. For example: Opening pair ENG total is
                              70 runs and Opening pair SA is 90 runs, then SA 90
                              runs will be declared as winner.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both innings will be valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Our exchange Special
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if the mentioned player
                              is not included in playing 11.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if match abandoned or
                              over reduced.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both innings will be valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Direction of First Boundary
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if the mentioned batsman
                              is not included in playing 11.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if match abandoned or
                              over reduced.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              The boundary hit through off side of the stump
                              will be considered as off side four.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              The boundary hit through leg side of the stump
                              will be considered as leg side four.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Boundaries through extras (byes,leg
                              byes,wide,overthrow) will not be considered as
                              valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Only 1st Inning will be considered
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Fifty &amp; Century by Batsman
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if match abandoned or
                              over reduced.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted if the mentioned batsman
                              is not included in playing 11.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All bets will be deleted unless the batsman faces
                              one legal ball.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Both Innings will be valid.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              1st over Fancy
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Boundaries through extras (byes,leg
                              byes,wide,overthrow) will not be considered.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Only 1st inning will be valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Odd Even Fancy
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Incompleted games will be deleted. Over reduced or
                              abandoned all bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              For example:-275 run SL bhav must be played 50
                              over if rain comes or any condition otherwise 275
                              run SL bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Next Man out
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Next man out fancy advance &amp; in regular. Both
                              inning will be valid. If any player does not come
                              in opening then all bets will be deleted. If over
                              reduced or abandoned then all bets will be
                              deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Caught out
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Caught out fancy in advance &amp; in regular. Both
                              inning will be valid. If over reduced or match
                              abandoned then all bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Wkt &amp; All out Fancy
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              5 wkt in 10 over &amp; All out in 20 over fancy is
                              valid for both inning. If match abandoned or over
                              reduced all bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Test Match: Game Completed Fancy
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              1. This is the fancy for match to be won/
                              completed in which day &amp; session (Completed:
                              Game has to be completed)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              2. If match drawn then all the sessions will be
                              considered as lost.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading3">
                <button onClick={handleInput }
                id="Election" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-controls="collapse3"
                  class="btn btn-submit btn-block collapsed"
                  aria-expanded="false"
                >
                  Election
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse3"
                aria-labelledby="heading3"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              1. THE FINAL RESULT DECLARED BY ELECTION
                              COMMISSION OF INDIA FOR LOKSABHA ELECTION 2019
                              WILL BE VALID IN OUR EXCHANGE.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              2. ACCIDENTAL ISSUES DURING LOKSABHA ELECTION 2019
                              WILL NOT BE COUNTED IN OUR EXCHANGE.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading4">
                <button onClick={handleInput }
                id="Khado" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse4"
                  aria-controls="collapse4"
                  class="btn btn-submit btn-block collapsed"
                  aria-expanded="false"
                >
                  Khado
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse4"
                aria-labelledby="heading4"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Only First inning valid for T20 and one day
                              matches.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Same will be work like Lambi. If match abandoned
                              or over reduced, all bets will be deleted
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              You can choose your own value in this event
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading5">
                <button onClick={handleInput }
                id="BigBashLeague" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse5"
                  aria-controls="collapse5"
                  class="btn btn-submit btn-block"
                >
                  Big Bash League
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse5"
                aria-labelledby="heading5"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">No real-time records found</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading6">
                <button onClick={handleInput }
                id="Caribbean" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse6"
                  aria-controls="collapse6"
                  class="btn btn-submit btn-block"
                >
                  Caribbean premier league
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse6"
                aria-labelledby="heading6"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">No real-time records found</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading7">
                <button onClick={handleInput }
                id="IPL" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse7"
                  aria-controls="collapse7"
                  class="btn btn-submit btn-block"
                >
                  IPL
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse7"
                aria-labelledby="heading7"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              If IPL fixture of 74 matches gets reduced due to
                              any reason, then all the special fancies will be
                              voided (Match abandoned due to rain/bad light will
                              not be considered in this)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Management decision will be final
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total 1st over runs: Average 6 runs will be given
                              in case match abandoned or over reduced (only 1st
                              innings valid)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total 1st 6 over run:- Average 46 runs will be
                              given in case match abandoned or over reduced
                              (Only 1st Innings valid)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total fours: Average 29 fours will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total sixes: Average 12 sixes will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Wickets - Average will 12 Wickets be given
                              in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Wides - Average 8 wides will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Extras - Average 16 extras will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Fifties - Average 2 fifties will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Caught outs: Average 8 caught out will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Bowled:- Average 2 Bowled out will be given
                              in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total LBW:- Average 1 LBW will be given in case
                              match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Total Run out:- Average 1 Run out will be given in
                              case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              How many matches win by a team : Only valid for
                              league stage matches. Ex. For CSK, How many
                              matches CSK win during league stages only
                              considered. Playoffs matches not considered in
                              this.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Most 4's by individual batsman of IPL : Maximum
                              Number of Fours Hit By A Batsman in full
                              Tournament. Ex. Last Season (2021) R Gaikwad Hit
                              64 Fours in 16 Matches. So, 64 was the Result for
                              last season.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Most 4's by an individual batsman in an Inning of
                              IPL : Maximum Number of Fours Hit By A Batsman in
                              one Innings. Ex. Last Season (2021) S Yadav Hit 13
                              Fours in 55th league Match. So, 13 was the Result
                              for last season.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Most 6's by individual batsman of IPL : Maximum
                              Number of Sixes Hit By A Batsman in full
                              Tournament. Ex. Last Season (2021) KL Rahul Hit 30
                              Sixes in 13 Matches. So, 30 was the Result for
                              last season.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Most 6's by individual batsman in an Inning of IPL
                              : Maximum Number of Sixes Hit By A Batsman in one
                              Innings. Ex. Last Season (2021) K Pollard Hit 8
                              Sixes in 27th league Match. So, 8 was the Result
                              for last season.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Most runs given by Bowler in an Inning of IPL :
                              Maximum How much Runs conceded by a individual
                              Bowler in an Innings. Ex : Last Season (2021) L
                              Ngidi concede 62 runs in 4 overs of 27th Match.
                              So, 62 was the Result for last season.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Most wickets by Bowler in an inning of IPL :
                              Maximum How much Wickets taken by a individual
                              Bowler in an Innings. Ex : Last Season (2021) H
                              Patel taken 5 wickets in 1st Match. So, 5 was the
                              Result for last season.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Most 50's by individual batsman of IPL : Maximum
                              Number of Fifties Hit By A Batsman in full
                              Tournament. Ex. Last Season (2021) Faf duPlessis
                              Hit 6 fifties in 16 Matches. So, 6 was the Result
                              for last season.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest total runs in individual match of IPL :
                              Maximum total runs of both Teams in individual
                              match. Ex . Last Season (2021) RR vs PBKS match
                              both teams Total runs 438 (4th League Match) . So,
                              438 was the Result for Last Season.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest innings run - Only first innings is valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Lowest innings run - Only first innings is valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest over run: Both innings are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest 1st over run in individual match: only
                              first innings is valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Fours in individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Sixes in individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Extras in individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest Wicket in individual match: Both innings
                              are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Highest 6 over run: - Both innings are valid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Super over will not be included
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In fastest fifty always the first 50 runs will be
                              considered, for example of R Sharma scores 1st
                              fifty in 17 balls and scores 100 in next 14 balls,
                              fastest 50 will be given based on the balls for
                              the 1st fifty runs
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading8">
                <button onClick={handleInput }
                id="Bookmaker" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse8"
                  aria-controls="collapse8"
                  class="btn btn-submit btn-block"
                >
                  Bookmaker
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse8"
                aria-labelledby="heading8"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              1. Due to any reason any team will be getting
                              advantage or disadvantage we are not concerned.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              2. Company reserves the right to suspend/void any
                              id/bets if the same is found to be illegitimate.
                              For example incase of vpn/robot-use/multiple entry
                              from same IP/ multiple bets at the same time
                              (Punching) and others. Note : only winning bets
                              will be voided.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              3. We will simply compare both teams 25 overs
                              score higher score team will be declared winner in
                              ODI (25 over comparison)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              4. We will simply compare both teams 10 overs
                              higher score team will be declared winner in T20
                              matches (10 over comparison)
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              5. Total Wickets - Average 12 wickets will be
                              given in case match abandoned or over reduced
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              6. Any query about the result or rates should be
                              contacted within 7 days of the specific event, the
                              same will not be considered valid post 7 days from
                              the event.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              7. Football-Spain LaLiga winner 2019-2020 without
                              Barcelona &amp; Real Madrid
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              8. Highest point scoring team in the league table
                              excluding Barcelona &amp; Real Madrid will be
                              considered as winner of this event
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              9. If two team ends up with equal points, then
                              result will be given based on the official point
                              table
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading9">
                <button onClick={handleInput }
                id="FootballFancy" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse9"
                  aria-controls="collapse9"
                  class="btn btn-submit btn-block"
                >
                  Football Fancy
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse9"
                aria-labelledby="heading9"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Tournament Total Goals, Team Total Goals goals.
                              scored in 90 minutes or in extra-time will
                              count.Goals scored in penalty shootouts do not
                              count.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Tournament Corners - Only corners taken in 90
                              minutes count.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              Tournament Penalties Missed/Converted - Penalties
                              taken in 90 minutes, extra-time and penalty
                              shootouts all count. If a penalty has to be
                              re-taken the previous disallowed penalty(ies) do
                              not count.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Match Odds :- All bets apply to the relevant full
                              'regular time' period including stoppage time. Any
                              extra-time and/or penalty shoot-out is not
                              included. For the cancellation of a goal, due to
                              VAR, bets matched between the time of the goal
                              being scored and the time at which the video
                              assistant referee finishes the review will be
                              voided. For the cancellation of a red card, due to
                              VAR, bets matched after the time at which the
                              video assistant referee commences the review will
                              be voided.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Under_Over Goals :- In the event of a match
                              starting but not being completed, all bets will be
                              void, unless the specific market outcome is
                              already determined,
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading10">
                <button onClick={handleInput }
                id="Betfair" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse10"
                  aria-controls="collapse10"
                  class="btn btn-submit btn-block"
                >
                  Betfair
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse10"
                aria-labelledby="heading10"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="text-danger">
                              If betfair void bets for some reason in running
                              game or completed game and because of it the
                              account goes any up/down effect, then the company
                              and the client will be responsible for its payout.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading11">
                <button onClick={handleInput }
                id="Kabaddi" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse11"
                  aria-controls="collapse11"
                  class="btn btn-submit btn-block"
                >
                  Kabaddi
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse11"
                aria-labelledby="heading11"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In any circumstances management decision will be
                              final related to all Fancy of kabaddi of our
                              exchange.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              All fancy bets will be validated when match has
                              been tied.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              Result of individual player of fancy will be
                              validated only when player play that match.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              In any case wrong rate has been given in fancy
                              that particular bets will be deleted.
                            </span>
                          </td>
                        </tr>
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">
                            <span data-v-eba495a4="" class="">
                              For Playoffs Final Result Of 40 Minutes Of Two
                              Halves Will Be Valid In Our Exchange
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading12">
                <button onClick={handleInput }
                id="Football" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse12"
                  aria-controls="collapse12"
                  class="btn btn-submit btn-block"
                >
                  Football
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse12"
                aria-labelledby="heading12"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">No real-time records found</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-eba495a4="" class="card">
              <div data-v-eba495a4="" id="heading13">
                <button onClick={handleInput }
                id="Tennis" 
                  data-v-eba495a4=""
                  data-toggle="collapse"
                  data-target="#collapse13"
                  aria-controls="collapse13"
                  class="btn btn-submit btn-block"
                  
                >
                  Tennis
                </button>
              </div>
              <div
                data-v-eba495a4=""
                id="collapse13"
                aria-labelledby="heading13"
                data-parent="#accordion"
                class="collapse"
              >
                <div data-v-eba495a4="" class="card-body">
                  <div data-v-eba495a4="" class="table-responsive">
                    <table data-v-eba495a4="" class="table table-bordered">
                      <tbody data-v-eba495a4="">
                        <tr data-v-eba495a4="">
                          <td data-v-eba495a4="">No real-time records found</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
