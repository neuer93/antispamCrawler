window.onload = function() {
    document.getElementById("crawlButton").onclick = function() {
        chrome.runtime.sendMessage({
            type: "quickComment"
        });
    };

    document.getElementById("openTabsButton").onclick = function() {
        chrome.runtime.sendMessage({
            type: "opentabs"
        });
    };
}
