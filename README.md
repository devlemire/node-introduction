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

In this step, we will create our server and have it listen on port `3000`.

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

### Summary

In this step, we will create a controller that keeps track of the book collection and has methods that can create books, read books, update books, and delete books.

### Instructions

* Create a folder in `server/` called `controllers`.
* In `server/controllers/` create a file called `books_controller.js`.
* Open `server/controllers/books_controller.js`.
* Create a variable called `books` that equals an empty array.
  * A book will be an object that has an `id`, `title`, and `author` property.
* Create a variable called `id` that equals `0`.
  * After a creation of a book, we will increment this by `1` to insure no books have the same `id`.
* Use `module.exports` to export an object.
* On the object created a method called `create`, `read`, `update`, and `delete`.
  * Create - This method should be able to add a new book to the collection using the `request body`.
  * Read - This method should return all books in the collection.
  * Update - This method should be able to update a book by an id from the `request query parameters`.
  * Delete - This method should be able to delete a book by an id from the `request query parameters`.
* All methods should return the entire books array.

### Solution

<details>

<summary> <code> server/controller/books_controller.js </code> </summary>

```js
let books = [];
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

<br />

<b> insert giphy here </b>

## Step 6

### Summary

In this step, we will import our controller into `server/index.js` and create a routes that use the methods on the controller.

When creating a route you can use the `post`, `get`, `put`, and `delete` methods on app. The first argument is the URL of the request and the second argument is what function to execute when that URL is hit.

### Instructions

* Open `server/index.js`.
* Require the books controller under the router.
* Above `port` create four routes on `app`:
  * `post` - `/api/books`, `bc.create`.
  * `get` - `/api/books`, `bc.read`.
  * `put` - `/api/books/:id`, `bc.update`.
  * `delete` - `/api/books/:id`, `bc.delete`

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const bc = require(__dirname + '/controllers/books_controller.js');

const app = express();

app.use( bodyParser.json() );

const baseURL = "/api/books";
app.post(baseURL, bc.create);
app.get(baseURL, bc.read);
app.put(`${baseURL}/:id`, bc.update);
app.delete(`${baseURL}/:id`, bc.delete);

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

</details>

## Step 7

### Summary

In this step, we will use postman to test our endpoints

### Instructions

* Create three books.
* Get all books.
* Update a book.
* Delete a book.

### Solution

<b> insert giphy here </b>

## Step 8

### Summary

In this step, we will use `express.static` to serve up our `index.html` file. `express.static` takes one argument that is the folder you want to server when the server URL is hit. Our front-end was made using `create-react-app` which has a production ready build. We'll want to server the entire `public/build` folder.

### Instructions

* Call the `use` method on app and pass in `express.static( __dirname + '/../public/build')`.
* Open up `http://localhost:3005/` in your browser.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const bc = require( __dirname + '/controllers/books_controller');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + "/../public/build") );

const baseURL = "/api/books";
app.post(baseURL, bc.create);
app.get(baseURL, bc.read);
app.put(`${baseURL}/:id`, bc.update);
app.delete(`${baseURL}/:id`, bc.delete);

const port = 3000;
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
