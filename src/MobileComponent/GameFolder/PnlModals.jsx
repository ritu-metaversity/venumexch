import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postuserfancybook } from "../../App/Features/auth/authActions";

const PnlModals = ({matchId,FancyID}) => {

  const dispatch = useDispatch();

  const {Postuserfancybookdata} = useSelector((state) => state.auth);


  useEffect(()=>{
dispatch(Postuserfancybook({"matchId":matchId, "fancyId":FancyID}))
  },[matchId,FancyID])

console.log(FancyID,matchId,"kdjashdjhakshdkjas")
console.log(Postuserfancybookdata,"PostuserfancybookdataPostuserfancybookdata")



  return (
    <div>
      <div className="row row5 mt-2">
        <div className="col-12">
          <div className="table-responsive">
            <table
              role="table"
              aria-busy="false"
              aria-colcount="6"
              className="table b-table table-bordered deposit-table"
              id="__BVID__104"
            >
              <thead>
                <tr className="previous-deposite">
                  <th>Run</th>
                  <th
               
               >
                    Amount
                  </th>
                    </tr>
              </thead>

              <tbody>

                {
                Postuserfancybookdata&&Postuserfancybookdata.data.map((item)=>{
                    return(
                      <tr role="row">
                                            {  console.log(item,"console.log(item)")}

                      <td aria-colindex="1" className="text-left">
                        {item?.odds}
                      </td>
                      <td aria-colindex="4" style={{ color: "#f44336" }}>
                        {item?.pnl}
                      </td>
                    </tr>
                    )
                  })
                }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PnlModals;
