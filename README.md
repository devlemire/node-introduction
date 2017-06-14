<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we will create a node server that will act as a bookshelf. This server will keep track of books by being able to add books to a collect, read from the collection, update the collection, and delete from the collection. We'll use postman to test our endpoints.

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
* Require `express` in a variable called `express` and require `body-parser` in a variable called `bodyParser`.
* Create a variable called `app` that equals `express` invoked. 
* Call the `use` method on app and pass in `bodyParser`'s `json` method invoked.
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

app.use( bodyParser.json() );

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

app.use( bodyParser.json() );

const router = require('./routes/books_router');

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

</details>

<br />

<b> insert giphy here </b>

## Step 9

### Summary

In this step, we will update the controller to be able to handle creating, reading, updating, and deleting books from the collection.

A book will be an object with an `id`, `title`, and `author` property.

### Instructions

* Open `server/controllers/books_controller.js`.
* Create four properties on the object that's being exported:
  * create:
    * This method should be able to add a new book to the collection using the `request body`.
  * read:
    * This method should return all books in the collection.
  * update:
    * This method should be able to update a book by an `id` from the `request query parameters`.
    * This method should use the request body to update the values of the book object.
  * delete:
    * This method should be able to delete a book by an `id` from the `request query parameters`.
* Have all four methods send a response of the updated books array.

### Solution

<details>

<summary> <code> server/controllers/books_controller.js </code> </summary>

```js
let books = require(__dirname + "/../models/books_model.js");

let id = 0;

module.exports = {
  create: ( req, res ) => {
    const { title, author } = req.body;
    books.push( { id, title, author } );
    id++;
    res.status(200).send( books );
  },

  read: ( req, res ) => {
    res.status(200).send( books );
  },

  update: ( req, res ) => {
    const updateID = req.params.id;
    let index = books.findIndex( book => book.id == updateID );

    books[ index ] = {
      id: books[ index ].id,
      title: req.body.title || books[ index ].title,
      author: req.body.author || books[ index ].author
    };
    
    res.status(200).send( books );
  },

  delete: ( req, res ) => {
    const deleteID = req.params.id;
    books = books.filter( book => book.id != deleteID );
    res.status(200).send( books );
  }
};
```

</details>

## Step 10

### Summary

In this step, we will connect our router to the controller's methods. We'll connect our router by calling methods on it. The first argument will always be the URL of the request and the second parameter will always be what function to execute.

### Instructions

* Open `server/routes/books_router.js`.
* Call the `post` method on `router`.
  * Use `/` for the first argument.
  * Use the `create` method from the books controller for the second argument.
* Call the `get` method on `router`.
  * Use `/` for the first argument.
  * Use the `read` method from the books controller for the second argument.
* Call the `put` method on `router`.
  * Use `/:id` for the first argument.
    * `:id` allows us to create a parameter on the URL.
  * Use the `update` method from the books controller for the second argument.
* Call the `delete` method on `router`.
  * Use `/:id` for the first argument.
  * Use the `delete` method from the books controller for the second argument.

### Solution

<details>

<summary> <code> server/routes/books_router.js </code> </summary>

```js
const express = require('express');
const bc = require(__dirname + '/../controllers/books_controller.js');
const router = express.Router();

router.post('/', bc.create);
router.get('/', bc.read);
router.put('/:id', bc.update);
router.delete('/:id', bc.delete);

module.exports = router;
```

</details>

## Step 11

### Summary

In this step, we'll hook up our router to our server.

### Instructions

* Open `server/index.js`
* Call the `use` method on `app`.
  * Use `/api/books` as the first argument.
  * Use `router` as the second argument.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );

const router = require('./routes/books_router');

app.use('/api/books', router);

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

</details>

## Step 12

### Summary

In this step, we will use postman to test our endpoints

### Instructions

* Create three books.
* Get all books.
* Update a book.
* Delete a book.

### Solution

<b> insert giphy here </b>

## Step 13

### Summary

In this step, we will use `express.static` to serve up our `index.html` file. 

### Instructions

* Call the `use` method on app.
  * For the first argument, call `express.static` and pass in the `public` folder's directory as its first argument.
* Open up `http://localhost:3005/` in your browser.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + "/../public") );

const router = require('./routes/books_router');

app.use('/api/books', router);

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

</details>

<br />

<b> insert giphy here </b>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
