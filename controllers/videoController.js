// ==============================================================================
// Set Dependencies
// ==============================================================================

const db = require("../models");
const request = require("request");
const cheerio = require("cheerio");

// ==============================================================================
// Support Functions
// ==============================================================================

// parse the Video ID and platform from the URL for youtube and Vimeo videos
const getUrlParsedData = url => {
  let domainArray = url.split("/");
  let videoId = "";
  let videoPlatform = "";

  if (domainArray[0] === "https:" || domainArray[0] === "http:") {
    // remove the first two items from the array (the https: or http: and the "")
    domainArray = domainArray.slice(2);
    // remove the empty space between the original "//"
    // domainArray.shift();
  }

  switch (domainArray[0]) {
    case "youtu.be":
      videoId = domainArray[1];
      videoPlatform = "youtube";
      break;
    case "vimeo.com":
      videoId = domainArray[1];
      videoPlatform = "vimeo";
      break;
    case "www.youtube.com":
      videoId = domainArray[1].replace(/watch\?v=/g, "");
      videoPlatform = "youtube";
      break;
    default:
      videoId = "NaN";
      videoPlatform = "NaN";
  }

  const parsedData = {
    videoId: videoId,
    videoPlatform: videoPlatform
  };

  return parsedData;
};

// scrape meta data from the url submitted
const getMetaData = (req, res) => {

  const url = req.body.url;
  let siteName = "";
  let urlParsedData = getUrlParsedData(url);

  // scrape the meta data needed from the url
  return new Promise(resolve => {
    request.get(url, (err, response, html) => {

      let videoObj = {};
      videoObj.playlists = req.body.playlist;

      var $ = cheerio.load(html);

      $('meta[property="og:site_name"]').each(function(i, element) {
        siteName = $(element).attr("content");
      });

      $('meta[property="og:url"]').each(function(i, element) {
        videoObj.url = $(element).attr("content");
      });

      $('meta[property="og:title"]').each(function(i, element) {
        videoObj.title = $(element).attr("content");
      });

      $('meta[property="og:image"]').each(function(i, element) {
        videoObj.imageUrl = $(element).attr("content");
      });

      if (siteName === "NYTimes.com - Video") {
        $('meta[name="articleid"]').each(function(i, element) {
          videoObj.videoId = $(element).attr("content");
          videoObj.videoPlatform = "nytimes";
        });
      } else {
        videoObj.videoId = urlParsedData.videoId;
        videoObj.videoPlatform = urlParsedData.videoPlatform;
      }

      resolve(videoObj);
    });
  });
};

// ==============================================================================
// Methods for videoController
// ==============================================================================

module.exports = {
  findAll: function(req, res) {
    db.Video.find({})
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Video.create(req.body);
    db.User.allVideos
      .create(req.body)
      .then(dbResponse => res.json(dbResponse))
      // console.log(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  createExternal: function(req, res) {
    console.log(req.body);
    db.Video.create(req.body)
      .then(dbResponse => res.json(dbResponse))
      // console.log(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  addUserVid: function(req, res) {
    console.log(req.body);
    db.User.findOneAndUpdate(
      {
        _id: req.body.userId
      }, {
        $addToSet: {
          allVideos: req.body.vidId
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Video.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //removing a video finds all instances of the video in all collections and removes it from any collection where it exists.  it also removes the video from the user's "all videos" list.
  remove: function (req, res) {
    db.User.update({}, {
        $pull: {
          allVideos: req.params.id
        }
      }, {
        multi: true
      }).then(
        db.Playlist.update({}, {
          $pull: {
            videos: req.params.id
          }
        }, {
          multi: true
        })).then(
        db.Video
        .findByIdAndRemove({
          _id: req.params.id
        }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //deleting a video will only delete it from the collection you're currently in.  this functionality will only be available from inside a collecction
  delete: function (req, res) {
    db.Playlist.update({_id: req.params.playlistId}, {$pull: {videos: req.body.videoId}}, )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // getRecentVids: function (req, res) {

  //   db.Playlist.findById(req.params.id)
  //     .then(
  //       .skip(0).limit(10).sort({
  //       $natural: -1
  //     }))
  //     .catch(err => res.status(422).json(err));
  // }

  


  scrapeAndSave: function (req, res) {
    getMetaData(req).then((response) => {
      res.json(response);
    });
  }
};
