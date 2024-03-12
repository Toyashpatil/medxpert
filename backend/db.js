const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoURI = 'mongodb+srv://toyashpatil17:7TNQimvPkup5cakr@medxpert.memkczc.mongodb.net/';

const connectTOMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongodb")



    // Replace the uri string with your MongoDB deployment's connection string.
    // const uri = "mongodb+srv://toyash:toyashgay@cluster0.2nkeawg.mongodb.net/eventio";

    // const client = new MongoClient(uri);

    // async function run() {
    //   try {

    //     // Get the database and collection on which to run the operation
    //     const database = client.db();
    //     const movies = database.collection("users");

    //     // Query for a movie that has the title 'The Room'
    //     const query = { title: "The Room" };

    //     const options = {
    //       // Sort matched documents in descending order by rating
    //       sort: { "imdb.rating": -1 },
    //       // Include only the `title` and `imdb` fields in the returned document
    //       projection: { _id: 0, title: 1, imdb: 1 },
    //     };

    //     // Execute query
    //     const movie = await movies.findOne();

    //     // Print the document returned by findOne()
    //     console.log(movie);
    //   } finally {
    //     await client.close();
    //   }
    // }
    // run().catch(console.dir);

}

module.exports = connectTOMongo;



