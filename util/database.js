const mongodb=require('mongodb');
const { get } = require('../routes/admin');
const MongoClient =mongodb.MongoClient;

let _db;
const mongoConnect=callback =>{
    MongoClient.connect('mongodb+srv://reddyprashanth337:9949351872@cluster0.ef2guew.mongodb.net/shop?retryWrites=true&w=majority')

    .then(client =>{
        console.log('connected')
        _db=client.db()
        callback(client)
    })
    
    .catch(err =>{
        console.log(err)
        throw err;
    })
    
}

const getDb=() =>{
    if(_db){
        return _cb
    }
    throw 'No data found';
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb


