const mongoose = require('mongoose');

let witchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Witches must have a name!"],
        minlength: [2, "Witches must have a name 2 characters or longer!"]
    },
    broom: {
        type: String
    },
    coven: {
        type: String,
        required: [true, "Witches must come from somewhere!"]
    }
});

mongoose.model('Witch', witchSchema);