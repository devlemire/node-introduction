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

### Instructions

* Create an `index.js` file in `server/`.
* Open `server/index.js`.
* Require `express` and `body-parser`.
* Create a variable called `app` that equals `express` invoked. 
* Call the `listen` method on app. The app should listen on port 3005:
  * The first parameter of `listen` is the port number.
  * The second parameter of `listen` is a function that is called when the app starts listening.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

</details>

## Step 5

In this step, we will create a javascript file that will keep track of our book collection.

### Instructions

* Create a folder in `server/` called `models`.
* Inside of `server/models/` create a JS file called `books_model.js`.
* Inside of `server/modles/books_model.js` use `module.exports` to export an empty array.

### Solution

<details>

<summary> <code> server/models/books_model.js </code> </summary>

```js
module.exports = [];
```

</details>


## Step 6

### Summary 

In this step, we will create a javascript file that will handle all the logic of reading, creating, updating, and deleting books from the collection.

### Instructions

* Create a folder in `server/` called `controllers`.
* Inside of `server/controllers/` create a JS file called `books_controller.js`.
* Open `server/controllers/books_controller.js`.
* Import `books_model.js` at the top of the file.
* Use `module.exports` to export an empty object.
  * We'll put methods on this object later.

### Solution

<details>

<summary> <code> server/controllers/books_controller.js </code> </summary>

```js
const books = require(__dirname + "/../models/books_model.js");

module.exports = {};
```

</details>

## Step 7

### Summary

In this step, we will create a javascript file that will handle the routing of our server.

### Instructions

* Create a folder in `server/` called `routes`.
* Inside of `server/routes` create a JS file called `books_router.js`.
* Open `server/routes/books_router.js`.
* At the top of the file, require `express` and the books_controller.
* Create a router by invoking the `Router` method on express.
* Use `module.exports` to export the router.

### Solution

<details>

<summary> <code> server/routes/books_router.js </code> </summary>

```js
const express = require('express');
const bc = require(__dirname + '/../controllers/books_controller.js');
const router = express.Router();

module.exports = router;
```

</details>

## Step 8

### Summary

In this step, we will import our router into `server/index.js` and run our server to make sure everything has been setup correctly.

### Instructions

* Import the books router from `server/routes/books_router.js`.
* Start the api by running `node index.js` or `nodemon` ( make sure your terminal is in the server directory ).

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./routes/books_router');

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

</details>

<b> insert giphy here </b>











## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
