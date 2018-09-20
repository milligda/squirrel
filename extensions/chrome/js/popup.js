window.onload = function() {
  console.log("hello");
  var url = "";
  var terms = [];
  var id = "";
  var reqObj = {};
  var title = "";
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  url = tabs[0].url;
  source = url.hostname;
  title = tabs[0].title;
if(url.indexOf("youtube") !== -1){
source = "youtube";
terms = url.split("=");
id = terms[1];
} else {
terms = url.split("/");
id = terms[(terms.length-1)]
source = "vimeo";
}
reqObj = {
  title: title,
  url: url,
  videoPlatform: source,
};
document.getElementById("mainText").innerHTML = "<p>Video ID: " + reqObj.url + "</p>";

console.log(reqObj);
var x = new XMLHttpRequest();
x.open('POST', 'http://127.0.0.1:3000/api/videos/', true);
x.setRequestHeader('Content-Type','application/json');
x.onreadystatechange = function(){
    try {
        if (x.readyState != 4) return;
        if (x.status != 200)
            chrome.tabs.sendMessage(sender.tab.id, {'message': 'save_status', 'status': 'failure', 'code': x.status});
        else
            chrome.tabs.sendMessage(sender.tab.id, {'message': 'save_status', 'status': 'success', 'response': x.responseText});
    } catch (e) {
        chrome.tabs.sendMessage(sender.tab.id, {'message': 'save_status', 'status': 'exception'});
    }
};
x.send(JSON.stringify(reqObj));
});
};