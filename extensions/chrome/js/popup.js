  sq = {};
  var userId = "";
  sq.authenticate = function () {
    if (!localStorage.getItem("userId")) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:3000/api/users/login/external', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          // Typical action to be performed when the document is ready:
          userId = JSON.parse(xhr.responseText).userId;
          localStorage.setItem("userId", userId);
          sq.urlSend();
        } else {
          // error result
          document.getElementById("mainText").innerHTML = "<p>Error: " + xhr.responseText + "</p>";

        }
      };
      username = "neue@new.com";
      password = "testPassword";
      authObj = {
        "username": username,
        "password": password
      };

      xhr.send(JSON.stringify(authObj));
      document.getElementById("mainText").innerHTML = `logging in`;
    }
   else {
    userId = localStorage.getItem("userId")
    sq.urlSend();
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

      var url = document.createElement('a');
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
      // document.getElementById("mainText").innerHTML = "<p>" + JSON.stringify(vidObj) + "</p>";

      var xhr2 = new XMLHttpRequest();
      xhr2.open('POST', 'http://127.0.0.1:3000/api/videos/external', true);
      xhr2.setRequestHeader('Content-Type', 'application/json');
      xhr2.onreadystatechange = function () {
        if (xhr2.readyState == 4 && xhr2.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhr2.responseText);
          sq.addUserVid(xhr2.responseText);
        } else {
          // error result
          document.getElementById("mainText").innerHTML = "<p>Error: " + xhr2.responseText + "</p>";

        }
        document.getElementById("mainText").innerHTML = "<p>" + xhr2.responseText + "</p>";

      };
      xhr2.send(JSON.stringify(vidObj));


    });
  };

  sq.addUserVid = function (xres) {
    vidId = JSON.parse(xhrresp)._id;
    userVidObj = {
      userId : userId,
      vidId : vidId
    };
    var xhr3 = new XMLHttpRequest();
    xhr3.open('PUT', 'http://127.0.0.1:3000/api/videos/external', true);
    xhr3.setRequestHeader('Content-Type', 'application/json');
    xhr3.onreadystatechange = function () {
      if (xhr3.readyState == 4 && xhr3.status == 200) {
        // Typical action to be performed when the document is ready:
        document.getElementById("mainText").innerHTML = "<p>Saved to your videos</p>";

      } else {
        // error result
        document.getElementById("mainText").innerHTML = "<p>Error:" + xhr3.responseText + "</p>";

      }

    };
    console.log("sending: " + JSON.stringify(userVidObj));
    xhr3.send(JSON.stringify(userVidObj));




  };

  // sq.getCollection = function () {
  //   // Request from server to get collection information based on userID
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('POST', 'http://127.0.0.1:3000/api/users/external/login', true);
  //   xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState == 4 && xhr.status == 200) {
  //       // Typical action to be performed when the document is ready:

  //       document.getElementById("mainText").innerHTML = "<p>Collections: " + JSON.stringify(xhr.responseText) + "</p>";
  //     } else {
  //       // error result
  //       document.getElementById("mainText").innerHTML = "<p>Response:" + xhr.responseText + "</p>";

  //     }
  //   };
  //   xhr.send('{"username":"neue@new.com","password":"testPassword"}');
  // };

  window.onload = function () {
    sq.authenticate();
    // sq.urlSend();
  };


  // document.getElementById("mainText").innerHTML = "<p>To be replaced</p>";
  // //Request from server to get playlist information based on userID
  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', 'http://127.0.0.1:3000/api/playlists/user/1', true);
  // xhr.setRequestHeader('Content-Type','application/json');
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //      // Typical action to be performed when the document is ready:

  //     document.getElementById("mainText").innerHTML = "<p>Playlists: " + JSON.stringify(xhr.responseText) + "</p>";
  //   } else {
  //     // error result
  //     document.getElementById("mainText").innerHTML = "<p>Response:" + xhr.responseText + "</p>";



  // // Receive response with mongo-generated ID

  // // New xhr to add video ID to selected playlist


  // });