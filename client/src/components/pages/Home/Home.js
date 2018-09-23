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
    this.setCookie();
    console.log("console did mount");
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

  setCookie = () => {
    API.setCookie()
      .then(res => {
        console.log(res);

        document.cookie = ({'userId': res.userId,  maxAge: 2592000000 });  // Expires in one month    
        // res.json();
        
        // this.setState({
        //   loggedIn: res.data.loggedIn,
        //   userId: res.data.userId
        // });
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
