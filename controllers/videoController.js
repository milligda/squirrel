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

// create a search object for MongoDB with the different Playlist IDs
const playlistSearchObj = (req) => {

  // store the array of the playlists
  let playlists = req.body.playlist;
  // create an array container to add the search objects
  let idSearchObj = [];

  // for each item in the playlists array, create an object and push it to the idSearchObj array
  for (let i = 0; i < playlists.length; i++) {
    let searchObj = {};
    searchObj._id = playlists[i];

    idSearchObj.push(searchObj);
  }

  // return the array with the IDs for the different playlists
  return idSearchObj;
}

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

  //deleting a video finds all instances of the video in all collections and removes it from any collection where it exists.  it also deletes the video from the user's "all videos" list.  it also deletes the video document
  deleteVideo: function (req, res) {
    db.User.update({}, { $pull: { allVideos: req.params.id }}, { multi: true })
      .then(function (dbUser) {
        db.Playlist.update({}, { $pull: { videos: req.params.id }}, { multi: true })
          .then(function(dbPlaylist) {
            db.Video.findByIdAndRemove(req.params.id)
              .then(function(dbVideo) {
                res.json(dbVideo);
              })
              .catch(function(err) {
                console.log("Error removing the Video document");
                res.json(err);
              })
          })
          .catch(function(err) {
            console.log("Error removing the video from the playlists");
            res.json(err);
          })
      })
      .catch(function(err) {
        console.log("Error removing the video from the User's allVideos array");
        res.json(err);
      });
  },  

  //removing a video will only delete it from the collection you're currently in.  this functionality will only be available from inside a collection
  removeVideo: function (req, res) {
    db.Playlist.update({_id: req.params.playlistId}, {$pull: {videos: req.params.videoId}}, )
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
    console.log(req.body);
    // req = JSON.parse(req);
    // get the data required to create the Video document
    getMetaData(req).then((response) => {

      // create the object with the playlist IDs to update
      const playlistsToUpdate = playlistSearchObj(req);

      // save the new video in the Video collection
      db.Video.create(response)
      .then(function(newVideo) {

        // update the User's All Videos array to include the new video ID
        db.User.findByIdAndUpdate(req.params.id, {$push: { allVideos: newVideo._id }}, { new: true })
        .then(function(newUserData) {
          // update the playlist documents to include the new video ID
          db.Playlist.updateMany({ $or: playlistsToUpdate }, {$push: { videos: newVideo._id }}, { new: true })
          .then(function(newPlaylistData) {
            res.json(newPlaylistData);
          })
          .catch(function(err) {
            console.log("Error updating the Playlists with the new video ID");
            res.json(err);
          });
        })
        .catch(function(err) { 
          console.log("Error updating the User's All Video array with the new video ID");
          res.json(err);
        });
      })
      .catch(function(err) {
        console.log("Error saving the new video");
        res.json(err);
      });
    });
  }
};
