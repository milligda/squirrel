![logo](https://github.com/milligda/squirrel/blob/master/resources/Squirrel%20Preview%20Tile%20Small.png)

# Use as a Chrome extension and a watch-later website that allows you to save videos from a variety of platforms.

[Explore the app](https://squirrel-video.herokuapp.com/)

![intro](https://github.com/milligda/squirrel/blob/master/resources/screengrabs/intro.jpg)

## Features
* Store videos from different providers in one app
* Add videos to watch later through the Chrome extension or through the web app
* Create, edit, and delete playlists
* Watch all of the videos in your playlist at the click of one button

![home page](https://github.com/milligda/squirrel/blob/master/resources/screengrabs/homepg.png)

![playlist page](https://github.com/milligda/squirrel/blob/master/resources/screengrabs/playlistpg.png)

![add video page](https://github.com/milligda/squirrel/blob/master/resources/screengrabs/addVideopg.png)

![create playlist page](https://github.com/milligda/squirrel/blob/master/resources/screengrabs/createpg.png)


## Technologies
* Front-end
    * React
    * react-router-dom
    * axios
    * react-sortable-hoc

* Back-end
    * MongoDB
    * Passport.js
    * Node
    * Express


## App Organization

The React app is housed within the repository folder in a `client` folder. This houses all of the frontend calls and strucutre. Outside of this client folder and within the repository folder are all of the backend folders and files (ex: `server.js`)

Below is an example of organization within the client folder, specifically using the `/src` and `/public` folders.

```
  client
    - src
      - components
        - assets
            -images
        - pages
            - ExampleComponentFolder
                - index.js
                - ExampleComponentFolder.js
                - ExampleComponentFolder.css
        - partials
      - utils
        - API.js

    - public
        - assets
            - css
                - global.css
                - reset.css

  ```

* `pages` house the site's pages.
* `partials` house components to be used on your pages
* for both pages and partials, create a folder for your component. Within it, always include an `index.js`, `.css`, and `.js` specific to each 
* `utils/API.js` houses API calls using the npm package "axios"
* `public/assets/css/` stores your stylesheets


## Extension

[Get the Chrome Extension](https://chrome.google.com/webstore/detail/squirrel/ddfnjccdalikdhoaelepmoldpgookabe)


