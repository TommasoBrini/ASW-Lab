const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

client.connect()
    .then(() => {
        const database = client.db('myDB');
        const collection = database.collection('myColl');
        const document = { myKey: 'My Value' };
        return collection.insertOne(document);
    })
    .then(result => {
        console.log(`Document inserted with _id: ${result.insertedId}`);
    })
    .catch(error => {
        console.error('Error connecting to MongoDB or inserting document:', error);
    })
    .finally(() => {
        client.close();
    });
