window.onload = function() {
  console.log("hello");
  var url = "";
  var terms = [];
  var id = "";
  var reqObj = {};
  var title = "";

  var userId = localStorage.getItem('squirrelId');

document.getElementById("mainText").innerHTML = "<p>" + userId +  "</p>";


//Request from server to get collection information based on userID
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://127.0.0.1:3000/api/collections/user/1', true);
// xhr.setRequestHeader('Content-Type','application/json');
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//      // Typical action to be performed when the document is ready:

//     document.getElementById("mainText").innerHTML = "<p>Collections: " + JSON.stringify(xhr.responseText) + "</p>";
//   } else {
//     // error result
//     document.getElementById("mainText").innerHTML = "<p>Response:" + xhr.responseText + "</p>";

//   }
// };
// xhr.send();


//Get video URL and parse info from it
// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//   url = tabs[0].url;
//   source = url.hostname;
//   title = tabs[0].title;
// if(url.indexOf("youtube") !== -1){
// source = "youtube";
// terms = url.split("=");
// id = terms[1];
// } else {
// terms = url.split("/");
// id = terms[(terms.length-1)]
// source = "vimeo";
// }
// reqObj = {
//   title: title,
//   url: url,
//   videoPlatform: source,
// };
// // document.getElementById("mainText").innerHTML = "<p>Video ID: " + reqObj.url + "</p>";
// document.getElementById("mainText").innerHTML = "<p>To be overwritten</p>";


// console.log(reqObj);

// // post a video to the database
// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'http://127.0.0.1:3000/api/videos/', true);
// xhr.setRequestHeader('Content-Type','application/json');
// xhr.onreadystatechange = function(){
//     try {
//         if (xhr.readyState != 4) return;
//         if (xhr.status != 200)
//             chrome.tabs.sendMessage(sender.tab.id, {'message': 'save_status', 'status': 'failure', 'code': xhr.status});
//         else
//             chrome.tabs.sendMessage(sender.tab.id, {'message': 'save_status', 'status': 'success', 'response': xhr.responseText});
//     } catch (e) {
//         chrome.tabs.sendMessage(sender.tab.id, {'message': 'save_status', 'status': 'exception'});
//     }
// };
// xhr.send(JSON.stringify(reqObj));

// // Receive response with mongo-generated ID

// // New xhr to add video ID to selected collection


// });
};