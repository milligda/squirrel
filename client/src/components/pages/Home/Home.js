import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import { CollectionList, CollectionListItem } from "../Collection";



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
      <div>
        
        <h1>Welcome to your home page!</h1>
        <h2>Hello user {this.state.userId}</h2>

        {/* <div>
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
