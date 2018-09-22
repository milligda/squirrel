//If available, get user information from cookie, set status to logged in

var userId = "5ba5bbf1ea35c93e7d9fe9de";
//If no cookie, set status to logged out


//Request from server to get collection information based on userID

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:3000/api/collections/' +userId, true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
     // Typical action to be performed when the document is ready:

JSON.stringify(xhr.responseText)
  } else {
    // error result
    document.getElementById("mainText").innerHTML = "<p>Response:" + xhr.responseText + "</p>";

  }
};
xhr.send();