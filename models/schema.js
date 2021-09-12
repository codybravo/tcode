const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "title"
    },
    snip: {
        type: String,
        default: "",
    }
},
{ timestamps:true });

const Note = mongoose.model("Note", UserSchema);

module.exports = Note;