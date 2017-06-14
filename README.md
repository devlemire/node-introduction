<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we will create a node server that will act as a Bookshelf. This server will keep track of Books by being able to add books to a collect, remove from the collection, delete from the collection, and read from the collection. We'll use postman to test our endpoints.

## Step 1

### Summary

In this step, we will create a package.json to keep track of our server's packages.

### Instructions

* Run `npm init -y`.

### Solution

<b>insert giphy here</b>

## Step 2

### Summary

In this step, we will install the most common packages you'll use when making a node server.

### Instructions

* Run `npm install --save express body-parser`

### Solution

<b> insert giphy here </b>

## Step 3

In this step, we will create a `.gitignore` file to ignore the `node_modules` folder `npm install` created.

### Instructions

* Create a `.gitignore` file in the root of the project.
* Add `node_modules` on the first line and save the file.

### Solution

<details>

<summary> <code> .gitignore </code> </summary>

```
node_modules
```

</details>

## Step 4

In this step, we will create our server and have it listen on port `3005`.

## Step 4

### Instructions

* Create an `index.js` file in `server/`.
* Open `server/index.js`.
* Require `express` and `body-parser`.
* Create a variable called `App` that equals `express` invoked. 
* Call the `listen` method on App. The app should listen on port 3005:
  * The first parameter of `listen` is the port number.
  * The second parameter of `listen` is a function that is called when the App starts listening.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const port = 3005;
App.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

</details>













## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
