var domain = 'http://127.0.0.1:3000';
var sq = {};
var userId = "";
var d = document;

sq.authenticate = function (cb) {
  if (!localStorage.getItem("userId")) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', `${domain}/api/users/login/external`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Typical action to be performed when the document is ready:
        userId = JSON.parse(xhr.responseText).userId;
        localStorage.setItem("userId", userId);
        alert("Success");
        cb();
      } else {
        // error result
        d.getElementById("mainText").innerHTML = "<p>Error: " + xhr.responseText + "</p>";

      }
    };
    username = "neue@new.com";
    password = "testPassword";
    authObj = {
      "username": username,
      "password": password
    };

    xhr.send(JSON.stringify(authObj));
    d.getElementById("mainText").innerHTML = `logging in`;
  } else {
    userId = localStorage.getItem("userId")
    cb();
  }
}

sq.urlSend = function () {
  console.log("hello");
  var url = "";
  var terms = [];
  var id = "";
  var reqObj = {};
  var title = "";

  chrome.tabs.query({
    'active': true,
    'lastFocusedWindow': true
  }, function (tabs) {

    var url = d.createElement('a');
    url.href = tabs[0].url;

    if (url.hostname.indexOf("youtube") != -1) {
      vP = "youtube";
      title = tabs[0].title.split(" - YouTube")[0];
      src = tabs[0].url;
      id = url.search.split("=")[1];
    } else if (url.hostname.indexOf("vimeo") != -1) {
      vP = "vimeo";
      title = tabs[0].title.split(" on Vimeo")[0];
      src = tabs[0].url;
      id = url.pathname.split("/")[url.pathname.split("/").length - 1]
    } else {
      return "This website isn't supported yet."
    }

    vidObj = {
      videoPlatform: vP,
      title: title,
      url: src,
      videoId: id
    };
    // d.getElementById("mainText").innerHTML = "<p>" + JSON.stringify(vidObj) + "</p>";

    var xhr2 = new XMLHttpRequest();
    xhr2.open('POST', `${domain}/api/videos/external`, true);
    xhr2.setRequestHeader('Content-Type', 'application/json');
    xhr2.onreadystatechange = function () {
      if (xhr2.readyState == 4 && xhr2.status == 200) {
        // Typical action to be performed when the d is ready:
        console.log(xhr2.responseText);
        sq.addUserVid(xhr2.responseText);
      } else {
        // error result
        d.getElementById("mainText").innerHTML = "<p>Error: " + xhr2.responseText + "</p>";

      }
      d.getElementById("mainText").innerHTML = "<p>" + xhr2.responseText + "</p>";

    };
    xhr2.send(JSON.stringify(vidObj));


  });
};

sq.addUserVid = function (xres) {
  vidId = JSON.parse(xhrresp)._id;
  userVidObj = {
    userId: userId,
    vidId: vidId
  };
  var xhr3 = new XMLHttpRequest();
  xhr3.open('PUT', `${domain}/api/videos/external`, true);
  xhr3.setRequestHeader('Content-Type', 'application/json');
  xhr3.onreadystatechange = function () {
    if (xhr3.readyState == 4 && xhr3.status == 200) {
      // Typical action to be performed when the d is ready:
      d.getElementById("mainText").innerHTML = "<p>Saved to your videos</p>";

    } else {
      // error result
      d.getElementById("mainText").innerHTML = "<p>Error:" + xhr3.responseText + "</p>";

    }

  };
  console.log("sending: " + JSON.stringify(userVidObj));
  xhr3.send(JSON.stringify(userVidObj));




};

sq.getPlaylists = function () {
  //Request from server to get playlist information based on userID
  var xhr4 = new XMLHttpRequest();
  xhr4.open('GET', `${domain}/api/playlists/user/${userId}`, true);
  xhr4.setRequestHeader('Content-Type', 'application/json');
  xhr4.onreadystatechange = function () {
    if (xhr4.readyState == 4 && xhr4.status == 200) {
      console.log(xhr4.responseText);
      // Typical action to be performed when the document is ready:
      var playlists = JSON.parse(xhr4.responseText);

      for(var i=0; i<playlists.length; i++){
      var playCheck = d.createElement("input");

      //create checkbox
      playCheck.setAttribute("type", "checkbox");
      //assign attributes
      playCheck.name = "playlistId";
      playCheck.value = "playlistName";
      playCheck.class = "playCheck";
      playCheck.id = "playListNum";
      
      var playText = d.createElement("label");
      playText.htmlFor = "playListNum";
      playText.appendChild(d.createTextNode('Playlist name here'));
    
      d.getElementById("playOptions").appendChild(playCheck);
    
      d.getElementById("playOptions").appendChild(playText);
      d.getElementById("mainText").innerHTML = "hi";

      }
    } else {
      // error result
      console.log(xhr4.responseText);
      d.getElementById("mainText").innerHTML = "<p>Response:" + JSON.stringify(xhr4.responseText) + "</p>";


    }
  };
  xhr4.send();
};

window.onload = function () {
  sq.authenticate(sq.getPlaylists);
  
};





// // Receive response with mongo-generated ID

// // New xhr to add video ID to selected playlist


// });