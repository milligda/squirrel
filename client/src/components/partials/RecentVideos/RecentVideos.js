import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import "./recentVideos.css";

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: '#ffffff',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

// The example data is structured as follows:

 const tileData = [
    {
        "selected": false,
        "key": "video",
        "_id": "5bab967b98ca8f23fce7a208",
        "url": "https://vimeo.com/163505789",
        "title": "Meager Into Might",
        "imageUrl": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F568635551_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png",
        "videoId": "163505789",
        "videoPlatform": "vimeo",
        "__v": 0
        },
        {
        "selected": false,
        "key": "video",
        "_id": "5bad2264b15a9c44dc80e593",
        "url": "https://www.youtube.com/watch?v=64-T6ICuywY",
        "title": "Doom of Valyria: what destroyed Daenerys and Jon’s ancestors?",
        "imageUrl": "https://i.ytimg.com/vi/64-T6ICuywY/maxresdefault.jpg",
        "videoId": "64-T6ICuywY",
        "videoPlatform": "youtube",
        "__v": 0
        },
        {
        "selected": false,
        "key": "video",
        "_id": "5bb1829329ae193758f4d8b1",
        "url": "https://vimeo.com/channels/staffpicks/290556837",
        "title": "Do Or Die in Vimeo Staff Picks",
        "imageUrl": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F726673169_1280x720.jpg&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png",
        "videoId": "290556837",
        "videoPlatform": "vimeo",
        "__v": 0
        },
        {
        "selected": false,
        "key": "video",
        "_id": "5bb189a34f5ca13e9449b579",
        "url": "https://www.youtube.com/watch?v=AnE7M6QOWWQ",
        "title": "Professor Goes To Prison (Full Version)",
        "imageUrl": "https://i.ytimg.com/vi/AnE7M6QOWWQ/maxresdefault.jpg",
        "videoId": "AnE7M6QOWWQ",
        "videoPlatform": "youtube",
        "__v": 0
        }
 ];

 const dataWithLinks = () => {
    let fullTileData = [];

     tileData.forEach(tile => {
        let videoUrl = `/video/${tile._id}`;
        tile.link = videoUrl;
        fullTileData.push(tile);
     });

     return fullTileData;
 }

const RecentVideos = (props) => {
  const { classes } = props;

  const videoData = dataWithLinks();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3.5}>
        {videoData.map(tile => (
            // <Link to={tile.link}>
                <GridListTile key={tile._id}>
                    <img src={tile.imageUrl} alt={tile.title} />
                    <GridListTileBar
                    title={tile.title}
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                    />
                </GridListTile>  
            // </Link>
        ))}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(RecentVideos);