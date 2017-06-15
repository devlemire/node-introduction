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
    * If the length of the books array is zero after deleting, set the global `id` variable back to `0`.
      * This will allow Postman Unit Tests to be tested without having to restart the server after each test run.
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
    if( books.length === 0 ) { id = 0; }
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

In this step, we will use Postman Unit Tests to test our endpoints.

### Instructions

* Open Postman.
* Click on the `Import` button and then click on `Paste Raw Text`.
  * <details>

    <summary> <code> Raw Text </code> </summary>

    ```
    {
      "id": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
      "name": "node_introduction",
      "description": "node_introduction Unit Tests",
      "order": [
        "c51591ab-b243-cb4e-bb8e-15685fb38ce6",
        "bc149d30-ee24-e42a-d9ba-04e377146efc",
        "35447ce6-349d-d383-f3da-8586eaba18db",
        "3f4dfd25-f0dc-c45d-70af-06f189a123dd",
        "b7fa1542-6804-1d88-5967-41de1301fffc",
        "8ce50b63-f751-598d-c262-4e40cd5a3586",
        "29483a72-ff0f-fc68-ec42-5135237fe697",
        "f90a934e-2aba-4b29-14e6-4c578e1db765"
      ],
      "folders": [],
      "timestamp": 1497539772856,
      "owner": "851632",
      "public": false,
      "requests": [
        {
          "id": "29483a72-ff0f-fc68-ec42-5135237fe697",
          "headers": "Content-Type: application/json\n",
          "headerData": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "",
              "enabled": true
            }
          ],
          "url": "http://localhost:3000/api/books/1",
          "queryParams": [],
          "pathVariables": {},
          "pathVariableData": [],
          "preRequestScript": null,
          "method": "DELETE",
          "collectionId": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
          "data": [],
          "dataMode": "raw",
          "name": "http://localhost:3000/api/books",
          "description": "",
          "descriptionFormat": "html",
          "time": 1497541972286,
          "version": 2,
          "responses": [],
          "tests": null,
          "currentHelper": "normal",
          "helperAttributes": {},
          "rawModeData": ""
        },
        {
          "id": "35447ce6-349d-d383-f3da-8586eaba18db",
          "headers": "Content-Type: application/json\n",
          "headerData": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "",
              "enabled": true
            }
          ],
          "url": "http://localhost:3000/api/books",
          "queryParams": [],
          "preRequestScript": null,
          "pathVariables": {},
          "pathVariableData": [],
          "method": "POST",
          "data": [],
          "dataMode": "raw",
          "version": 2,
          "tests": "const res = JSON.parse( responseBody );\nconst title1 = ( res[0].title === \"Book 0\" );\nconst author1 = ( res[0].author === \"Author 0\");\nconst resLength = ( res.length === 3 );\n\ntests[\" API can add new books to the collection \"] = title1 && author1 && resLength;",
          "currentHelper": "normal",
          "helperAttributes": {},
          "time": 1497542597982,
          "name": "http://localhost:3000/api/books",
          "description": "",
          "collectionId": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
          "responses": [],
          "rawModeData": "{\n\t\"title\": \"Book 2\",\n\t\"author\": \"Author 2\"\n}"
        },
        {
          "id": "3f4dfd25-f0dc-c45d-70af-06f189a123dd",
          "headers": "Content-Type: application/json\n",
          "headerData": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "",
              "enabled": true
            }
          ],
          "url": "http://localhost:3000/api/books",
          "queryParams": [],
          "preRequestScript": null,
          "pathVariables": {},
          "pathVariableData": [],
          "method": "GET",
          "data": [],
          "dataMode": "raw",
          "tests": "const res = JSON.parse( responseBody );\nconst isArray = Array.isArray( res );\nconst resLength = ( res.length === 3 );\n\ntests[\" API returns array of books in collection \" ] = isArray && resLength;",
          "currentHelper": "normal",
          "helperAttributes": {},
          "time": 1497542139884,
          "name": "http://localhost:3000/api/books",
          "description": "",
          "collectionId": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
          "responses": [],
          "rawModeData": ""
        },
        {
          "id": "8ce50b63-f751-598d-c262-4e40cd5a3586",
          "headers": "Content-Type: application/json\n",
          "headerData": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "",
              "enabled": true
            }
          ],
          "url": "http://localhost:3000/api/books/0",
          "queryParams": [],
          "pathVariables": {},
          "pathVariableData": [],
          "preRequestScript": null,
          "method": "DELETE",
          "collectionId": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
          "data": [],
          "dataMode": "raw",
          "name": "http://localhost:3000/api/books",
          "description": "",
          "descriptionFormat": "html",
          "time": 1497540327980,
          "version": 2,
          "responses": [],
          "tests": null,
          "currentHelper": "normal",
          "helperAttributes": {},
          "rawModeData": ""
        },
        {
          "id": "b7fa1542-6804-1d88-5967-41de1301fffc",
          "headers": "Content-Type: application/json\n",
          "headerData": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "",
              "enabled": true
            }
          ],
          "url": "http://localhost:3000/api/books/0",
          "queryParams": [],
          "preRequestScript": null,
          "pathVariables": {},
          "pathVariableData": [],
          "method": "PUT",
          "data": [],
          "dataMode": "raw",
          "version": 2,
          "tests": "const res = JSON.parse( responseBody );\nconst book = res[ 0 ];\n\nconst titleUpdated = ( book.title === \"Updated\" );\nconst authorUpdated = ( book.author === \"Updated\" );\n\ntests[\" API can update title and author of book \"] = titleUpdated && authorUpdated;",
          "currentHelper": "normal",
          "helperAttributes": {},
          "time": 1497542115722,
          "name": "http://localhost:3000/api/books",
          "description": "",
          "collectionId": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
          "responses": [],
          "rawModeData": "{\n\t\"title\": \"Updated\",\n\t\"author\": \"Updated\"\n}"
        },
        {
          "id": "bc149d30-ee24-e42a-d9ba-04e377146efc",
          "headers": "Content-Type: application/json\n",
          "headerData": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "",
              "enabled": true
            }
          ],
          "url": "http://localhost:3000/api/books",
          "queryParams": [],
          "pathVariables": {},
          "pathVariableData": [],
          "preRequestScript": null,
          "method": "POST",
          "collectionId": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
          "data": [],
          "dataMode": "raw",
          "name": "http://localhost:3000/api/books",
          "description": "",
          "descriptionFormat": "html",
          "time": 1497541529774,
          "version": 2,
          "responses": [],
          "tests": null,
          "currentHelper": "normal",
          "helperAttributes": {},
          "rawModeData": "{\n\t\"title\": \"Book 1\",\n\t\"author\": \"Author 1\"\n}"
        },
        {
          "id": "c51591ab-b243-cb4e-bb8e-15685fb38ce6",
          "headers": "Content-Type: application/json\n",
          "headerData": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "",
              "enabled": true
            }
          ],
          "url": "http://localhost:3000/api/books",
          "queryParams": [],
          "preRequestScript": null,
          "pathVariables": {},
          "pathVariableData": [],
          "method": "POST",
          "data": [],
          "dataMode": "raw",
          "version": 2,
          "tests": null,
          "currentHelper": "normal",
          "helperAttributes": {},
          "time": 1497541516835,
          "name": "http://localhost:3000/api/books",
          "description": "",
          "collectionId": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
          "responses": [],
          "rawModeData": "{\n\t\"title\": \"Book 0\",\n\t\"author\": \"Author 0\"\n}"
        },
        {
          "id": "f90a934e-2aba-4b29-14e6-4c578e1db765",
          "headers": "Content-Type: application/json\n",
          "headerData": [
            {
              "key": "Content-Type",
              "value": "application/json",
              "description": "",
              "enabled": true
            }
          ],
          "url": "http://localhost:3000/api/books/2",
          "queryParams": [],
          "preRequestScript": null,
          "pathVariables": {},
          "pathVariableData": [],
          "method": "DELETE",
          "data": [],
          "dataMode": "raw",
          "tests": "const res = JSON.parse( responseBody );\nconst isEmpty = ( res.length === 0 );\n\ntests[\" API can delete books from the collection \"] = isEmpty;",
          "currentHelper": "normal",
          "helperAttributes": {},
          "time": 1497542277697,
          "name": "http://localhost:3000/api/books",
          "description": "",
          "collectionId": "e8e75d92-6b41-4f15-3670-4955f7f6f81f",
          "responses": [],
          "rawModeData": ""
        }
      ]
    }
    ```

    </details>

### Solution

<b> insert giphy here </b>

## Step 8

### Summary

In this step, we will use `express.static` to serve up our `index.html` file. `express.static` takes an argument that is the folder location you want to serve when the server URL is hit in a browser. Our front-end was made using `create-react-app` which has a production ready build. We'll want to server the entire `public/build` folder.

### Instructions

* Call the `use` method on app and pass in `express.static( __dirname + '/../public/build')`.
* Open up `http://localhost:3000` in your browser.

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
