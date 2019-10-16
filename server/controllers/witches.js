let mongoose = require('mongoose');
let Witch = mongoose.model('Witch');



module.exports = {
    index: function(req, res){
        Witch.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: function(req, res){
        Witch.create(req.body)
            .then(data => res.json({message: 'success', data: data}))
            .catch(err => res.json({message: 'fail', data: data}))
    },
    findById: function(req, res){},
    update: function(req, res){},
    delete: function(req, res){
        Witch.remove({_id: req.params._id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}