var axios = require("axios");
var cheerio = require("cheerio");

axios.get("https://www.youtube.com/watch?v=NtQkz0aRDe8")

    .then(response => {
      console.log(response.data);
      let $ = cheerio.load(response.data);
      let resultsArr = [];
      let body = $("body");

    });