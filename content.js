chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type){
        case "reserve":
            var topShop = $(".restaurant-list-table:eq(2)>tbody>tr>td>div");
            for(var i = 0; i < topShop.length; ++ i){
                 topShop[i].childNodes[1].childNodes[3].click();
            }
            break;
        case "deleteReserve":
            var topShop = $(".restaurant-list-table:eq(2)>tbody>tr>td>div");
            for(var i = 0; i < topShop.length; ++ i){
                 topShop[i].childNodes[1].childNodes[5].click();
            }
            break;
        case "quickComment":
            var table = $("#page-header");
            table.remove();
            var list, outStr = "";
            for(var i = 0; i < 10; ++ i){
                list = $('.td-div-shopName');
                areaList = $('.td-div-mainRegionName');
                score1 = $('.td-div-refinedScore1');
                score2 = $('.td-div-refinedScore2');
                score3 = $('.td-div-refinedScore3');
                price  = $('.td-div-avgPrice');
                for(var j = 0; j < list.length; ++ j){
                    outStr += (i * 15 + j + 1) + "       " + $(list[j]).text()
                        + "  " + $(".J_shopName:eq(" + j + ")").attr("href").split('/').pop()
                        + "  " + $(areaList[j]).text()
                        + "  " + $(score1[j]).text()
                        + "  " + $(score2[j]).text()
                        + "  " + $(score3[j]).text()
                        + "  " + $(price[j]).text()
                        + "\n";
//                    console.log(i * 15 + j + 1);
  //                  console.log($(list[j]).text());
                }
                $('.next')[0].click();
            }
            $(".shopRankNav").append("<textarea>" + outStr  + "</textarea>")
    /*
            var tableList = $(".order-table.table.table-striped:eq(0)>tbody>tr");
            for (var i = tableList.length - 1; i >= 0; i--) {
                tableList[i].childNodes[3].childNodes[1].childNodes[8].click();
            };
            $(".btn.order-time-rating-save-btn")[0].click();
            $(".order-service-input.order_service_radio")[0].click();
            $(".btn.btn-yellow.order_service_save")[0].click();
            break;
            */
    }
})
