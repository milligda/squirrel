chrome.browserAction.setBadgeBackgroundColor({
  color: [190, 190, 190, 230]
});
chrome.browserAction.setBadgeText({
  text: ""
});


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {


  if (changeInfo.url.match(".*youtube\.com\/watch.*|.*vimeo\.com\/.*[0-9]+.*|.*nytimes\.com\/video\/.*"))  {
    chrome.browserAction.setIcon({
      path: "../img/icon_acorn38px.png"
    });
  } else {
    chrome.browserAction.setIcon({
      path: "../img/icon_acorn_gray38px.png"
    });
  }

});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  // how to fetch tab url using activeInfo.tabid
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    if (tab.url.match(".*youtube\.com\/watch.*|.*vimeo\.com\/.*[0-9]+.*|.*nytimes\.com\/video\/.*")) {
      chrome.browserAction.setIcon({
        path: "../img/icon_acorn38px.png"
      });
    } else {
      chrome.browserAction.setIcon({
        path: "../img/icon_tail_gray38px.png"
      });
    }
  });
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  if(details.frameId === 0) {
      // Fires only when details.url === currentTab.url
      chrome.tabs.get(details.tabId, function(tab) {
            if (tab.url.match(".*youtube\.com\/watch.*|.*vimeo\.com\/.*[0-9]+*.*|.*nytimes\.com\/video\/.*")) {
              chrome.browserAction.setIcon({
                path: "../img/icon_acorn38px.png"
              });
            } else {
              chrome.browserAction.setIcon({
                path: "../img/icon_tail_gray38px.png"
              });
            }
      });
  }
});
// chrome.browserAction.setIcon({path: icon});