import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../../utils/API";
import { CollectionList, CollectionListItem } from "../Collection";
import "./home.css";
import RecentlySaved from "../../partials/RecentlySaved";



class Home extends Component {
  state = {
    loggedIn: true,
    userId: null
  };

  componentDidMount = () => {
    this.getUser();
  };

  getUser = () => {
    API.getUserStatus()
      .then(res => {
        console.log(res);
        this.setState({
          loggedIn: res.data.loggedIn,
          userId: res.data.userId
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="home-container">
        
        <h2>Hello user {this.state.userId}</h2>
        <h2>Here's everything you've squirreled away so far.</h2>

        <Link to="/video/1">
          <p className="sql-btn">Video Player</p>
        </Link>

        <Link to="/playlist/play/1">
          <p className="sql-btn">Playlist Player</p>
        </Link>

        {/* <RecentlySaved /> */}

        {/* <div className="collections-menu">
          <CollectionList>
          {this.state.collections.map(collection => {
              return (
              <CollectionListItem
                  key={collection.userId}
                  description={collection.description}
                  title={collection.title}
                  videos={collection.videos}
              />
              );
          })}
          </CollectionList>
          </div> */}
      </div>
    );
  }
}

export default Home;
