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
    }
    return true;
});