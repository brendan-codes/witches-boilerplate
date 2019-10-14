// require controllers
let witches = require('./../controllers/witches');

module.exports = function(app){

    app.get('/witches', witches.index);
    app.post('/witches', witches.create);
    app.get('/witches/:_id', witches.findById);
    app.put('/witches/:_id', witches.update);
    app.delete('/witches/:_id', witches.delete);


};