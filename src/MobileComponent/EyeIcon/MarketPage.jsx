import React from 'react'
import './MarketPage.css'

const MarketPage = () => {
    // console.log("mymarkets")
  return (
    <div class="container-inner" style={{marginTop:"80px", height: "81vh"}}>
   <section class="m-t-10">
      <h4 class="page-title p-l-15">My Markets</h4>
      <ul class="market-listing m-t-10">
         <li class="market-list-item" style={{ marginTop: "12px"}}>
            <a href="/m/gamedetail/32181223" class="">
               <div class="item-inner">
                  <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/cricket.png" alt='market-images'/> <span class="m-l-10 game-name v-m">Islamabad United v Peshawar Zalmi</span>
               </div>
            </a>
         </li>
      </ul>
   </section>
</div>
  )
}

export default MarketPage