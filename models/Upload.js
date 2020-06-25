const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({

    meta_data:{}
});



module.exports = Upload = mongoose.model("upload",uploadSchema);