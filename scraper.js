var axios = require("axios");
var cheerio = require("cheerio");

axios.get("https://www.youtube.com/watch?v=NtQkz0aRDe8")

    .then(response => {
      console.log(response.data);
      // console.log(behanceResponse);
      // console.log(dribbbleResponse);
      // let body = ""
      let $ = cheerio.load(response.data);
      let resultsArr = [];
      let body = $("body");
      // body = dribbbleResponse.data;
      // console.log(body);
    });