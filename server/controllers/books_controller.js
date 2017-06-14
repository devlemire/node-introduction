const books = require(__dirname + "/../models/books_model.js");

module.exports = {
  create: ( req, res ) => {
    const { title, author } = req.body;
    console.log( title, author );
  },

  read: ( req, res ) => res.status(200).send( books ),

  update: ( req, res ) => {
    const deleteID = req.params.id;
    console.log( deleteID );
  },

  delete: ( req, res ) => {
    const deleteID = req.params.id;
    console.log(deleteID);
  }
};