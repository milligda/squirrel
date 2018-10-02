chrome.browserAction.setBadgeBackgroundColor({
  color: [190, 190, 190, 230]
});
chrome.browserAction.setBadgeText({
  text: ""
});

compSites = ["/youtube/", "/vimeo/"]


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if ((changeInfo.url.match(/youtube/)) || (changeInfo.url.match(/vimeo/))) {
    chrome.browserAction.setIcon({
      path: "../img/icon_tailx38.png"
    });
  } else {
    chrome.browserAction.setIcon({
      path: "../img/icon_tail_grayx38.png"
    });
  }

});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  // how to fetch tab url using activeInfo.tabid
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    if ((tab.url.match(/youtube/)) || (tab.url.match(/vimeo/))) {
      chrome.browserAction.setIcon({
        path: "../img/icon_tailx38.png"
      });
    } else {
      chrome.browserAction.setIcon({
        path: "../img/icon_tail_grayx38.png"
      });
    }

  });
});
// chrome.browserAction.setIcon({path: icon});