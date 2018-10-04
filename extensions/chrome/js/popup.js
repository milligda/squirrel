var domain = "https://squirrel-video.herokuapp.com";
// var domain = "http://127.0.0.1:3000";
var d = document;
var reqObj = {};
var log = console.log;

function createElem(elemName) {
  return document.createElement(elemName);
}

function getElem(elemName) {
  return document.getElementById(elemName);
}

function createTextNode(elemName) {
  return document.createTextNode(elemName);
}

function querySelector(elemName) {
  return document.querySelectorAll(elemName);
}

function getElemName(elemName) {
  return document.getElementsByName(elemName);
}
sq = {
  checkUser: function () {
    var promise = new Promise(function (resolve, reject) {
      if (!localStorage.getItem("userId")) {
        getElem("playlistSubmit").style.display = "none";
        getElem("login").style.display = "block";
        getElem("btn-login").onclick = function () {
          // getElem("login").style.display = "none";

          event.preventDefault();
          reqObj.username = getElemName("username")[0].value;
          reqObj.password = getElemName("password")[0].value;
          log(reqObj);
          resolve(reqObj);
        };
      } else {
        reqObj.userId = localStorage.getItem("userId");
        resolve(reqObj);
      }
    });
    return promise;
  },
  authorize: function (reqObj) {
    var promise = new Promise(function (resolve, reject) {
      if (!reqObj.userId) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', `${domain}/api/users/login/external`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {

            if (JSON.parse(xhr.responseText).userId) {
              var userId = JSON.parse(xhr.responseText).userId;
              console.log(userId);
              localStorage.setItem("userId", userId);
              reqObj.userId = userId;
              getElem("login").style.display = "none";
              getElem("successMsg").style.display = "block";
              setTimeout(function () {
                window.close()
              }, 500);
              reject(reqObj);
            } else {
              getElem("login").style.display = "none";
              getElem("loginErr").style.display = "block";
            }
          } else if (xhr.readyState == 4 && xhr.status != 200) {
            getElem("login").style.display = "none";
            getElem("loginErr").style.display = "block";
            reject(xhr.responseText);
          }
        };
        authObj = {
          "username": reqObj.username,
          "password": reqObj.password
        };
        xhr.send(JSON.stringify(authObj));
        log("logging in");
      } else {
        resolve(reqObj);
      }
    });
    return promise;
  },
  urlGrab: function (reqObj) {
    log(reqObj);
    var promise = new Promise(function (resolve, reject) {
      chrome.tabs.query({
        "active": true,
        "lastFocusedWindow": true
      }, function (tabs) {
        reqObj.url = tabs[0].url;
        reqObj.password = "";
        resolve(reqObj);
      });
    });
    return promise;
  },
  getPlaylists: function (reqObj) {
    log("getting playlists");
    var promise = new Promise(function (resolve, reject) {
      if (reqObj.url.match(".*youtube\.com\/watch.*|vimeo\.com\/.*[0-9]|.*nytimes\.com\/video\/.*")) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `${domain}/api/users/data/${reqObj.userId}`, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var playlists = JSON.parse(xhr.responseText).playlists;
            reqObj.playlists = playlists;
            for (var i = 1; i < playlists.length; i++) {
              var playCheck = createElem("input");
              playCheck.setAttribute("type", "checkbox");
              playCheck.name = "playlist";
              playCheck.value = playlists[i]._id;
              playCheck.class = "playCheck";
              playCheck.id = "playListNum" + (i + 1);
              var playText = createElem("label");
              playText.htmlFor = "playListNum" + (i + 1);
              playText.appendChild(createTextNode(playlists[i].title));

              getElem("playOptions").appendChild(playCheck);
              getElem("playOptions").appendChild(playText);
              getElem("playOptions").appendChild(d.createElement("br"));
            }
            resolve(reqObj);
          } else {
            // log(xhr.responseText);
            // reject(xhr.responseText);
          }
        };
        xhr.send();
      } else {
        getElem("vidErr").style.display = "block";
        getElem("playlistSubmit").style.display = "none";
        getElem("footText").innerHTML = "<p>" + reqObj.url + "</p>";
        reject("video URL error")

      }
    });

    return promise;
  },
  getChecks: function (reqObj) {
    var promise = new Promise(function (resolve, reject) {
      var selPlaylists = [];
      selPlaylists.push(reqObj.playlists[0]._id);
      getElem("btn-submit").onclick = function () {
        event.preventDefault();
        selected = querySelector("[name='playlist']:checked");
        log(selected);
        for (var i = 0; i < selected.length; i++) {
          selPlaylists.push(selected[i].value);
        }
        reqObj.playlist = selPlaylists;
        getElem("playlistSubmit").style.display = "none";
        resolve(reqObj);
      };
    });
    return promise;
  },
  urlSend: function (reqObj) {
    var promise = new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', `${domain}/api/videos/save/${reqObj.userId}`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          getElem("success").style.display = "block";
          setTimeout(function () {
            window.close()
          }, 500);
      resolve(xhr.responseText);
        } else if (xhr.readyState == 4 && xhr.status != 200) {
          getElem("login").style.display = "none";
          getElem("sendErr").style.display = "block";
          reject(xhr.responseText);
      }
      };
      xhr.send(JSON.stringify(reqObj));
    });
    return promise;
  },
  uirrel: function () {
    sq.checkUser()
      .then(sq.authorize)
      .then(sq.urlGrab)
      .then(sq.getPlaylists)
      .then(sq.getChecks)
      .then(sq.urlSend)
      .then(function (fulfilled) {
        log(fulfilled);
      })
      .catch(
        function (err) {
          log(err);
        });
  }
};

window.onload = function () {
  sq.uirrel();
};