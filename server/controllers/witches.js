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
            .catch(err => res.json({message: 'fail', err: err}))
    },
    findById: function(req, res){
        Witch.findOne({_id: req.params._id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: function(req, res){
        Witch.findOneAndUpdate({_id: req.params._id}, req.body, {useValidators: true, new: true})
            .then(data => res.json({message: 'success', data: data}))
            .catch(err => res.json({message: 'fail', data: data}))
    },
    delete: function(req, res){
        Witch.remove({_id: req.params._id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}