chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    switch(request.type) {
        case "reserve":
            chrome.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, function(tab){
                chrome.tabs.sendMessage(tab[0].id, {type: "reserve"});
            });
            break;
        case "deleteReserve":
            chrome.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, function(tab){
                chrome.tabs.sendMessage(tab[0].id, {type: "deleteReserve"});
            });
            break;
        case "quickComment":
            chrome.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, function(tab){
                chrome.tabs.sendMessage(tab[0].id, {type: "quickComment"});
            });
            break;
        case "opentabs":
            var baseUrl = "http://www.dianping.com/shoplist/hot_";
            for(var i = 1; i < 11; ++ i){
                newURL = baseUrl+i+"_10";
                chrome.tabs.create({ url: newURL });
            }
    }
    return true;
});
