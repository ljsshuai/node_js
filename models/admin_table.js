var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var collectionName = "admin_table";

var schema = new Schema(
    {
        ID:{type:String},//积分
        username: {type:String},
        password:{type:String}
    },
    {
        collection: collectionName
    }
);
module.exports = mongoose.model(collectionName,schema);
