import React, { Component } from "react";
import API from "../../../utils/API";
import CollectionList from "../Collection/CollectionList";
import CollectionListItem from "../Collection/CollectionListItem";
// import Signup from "../../partials/Signup";
// import Login from "../../partials/Login";


class Welcome extends Component {

    state = {
        collections: []
      }
    
      componentDidMount() {
        this.loadCollections()
      }
    
      loadCollections = () => {
          
        API.getCollections()
          .then(data => data.json())
          .then(res => this.setState({ collections: res.data }))
          .catch(err => console.log(err));

          console.log(res.data);
      };

    render() {
        return (
            <div>
                <h1>Welcome to the Squirrel Home Page!</h1>

                {/* <div>
                    {/* Recently saved videos go here */}
                {/* </div> */}

                <div>
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
                </div>
            </div>
        );
    }
}

export default Welcome;
