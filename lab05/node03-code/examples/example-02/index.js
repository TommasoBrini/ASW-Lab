const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017';

const mySchema = new mongoose.Schema({
    myKey: String
});

mongoose.connect(uri, { dbName: 'myDB' })
    .then(() => {
        const MyModel = mongoose.model('myCollWithMongoose', mySchema);
        const document = new MyModel({ myKey: 'My Value' });
        return document.save();
    })
    .then(result => {
        console.log(`Document inserted with _id: ${result._id}`);
    })
    .catch(error => {
        console.error('Error connecting to MongoDB or inserting document:', error);
    })
    .finally(() => {
        mongoose.connection.close();
    });
