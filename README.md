# Squirrel

Squirrel away videos for a rainy day. Squirrel is a watch-later website that allows you to save videos from a variety of platforms.

![logo](https://github.com/milligda/squirrel/blob/master/client/public/assets/images/icon_acorn.svg)

## Features
* Store videos from different providers in one app
* Add videos to watch later through a Chrome extension or through the web app
* Create, edit, and delete playlists
* Watch all of the videos in your playlist at the click of one button

![home page](https://github.com/milligda/squirrel/blob/master/client/public/assets/images/homepg.png)

![playlist page](https://github.com/milligda/squirrel/blob/master/client/public/assets/images/playlistpg.png)

![add video page](https://github.com/milligda/squirrel/blob/master/client/public/assets/images/addVideopg.png)

![create playlist page](https://github.com/milligda/squirrel/blob/master/client/public/assets/images/createpg.png)


## Steps to Build the App

1. Make a project folder/repository and clone it into your machine

2. Create your React app inside the repository folder using create-react-app. This is where you will do all of your front-end handling.

```
npx create-react-app client

```
After you run this command, follow the instructions provided in the Terminal.


"Client" is the title of the folder which houses the React app. Within it is a "src" folder and "public" folder, in which you will create the following hierarchy: 

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

3. Install your dependencies

* In your `client/src/App.js` from React, import the following:
    * For routing: `react-router-dom`, `axios`
    * 

* In your  `server.js`, require the following:
    * `express`, `body-parser`, `express-session` ,`passport` ,`cors` ,`connect-mongo` (if using MongoDB), database routes, and the database.


4. Build the Backend

Outside of the 'client' folder, within your main respository folder, create the components necessary to connect your database to your front-end React app.

Your app will be run on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

* server.js
* set up your database
* create models, routes, and controllers to handle database calls


## Extension

[Get the Chrome Extension](https://chrome.google.com/webstore/detail/squirrel/ddfnjccdalikdhoaelepmoldpgookabe)


