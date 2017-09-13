const Thread = require('../models/Thread');
const Respon = require('../models/Respon');
const npmslug = require('achim-slug');

var findAll = (req, res) => {
  Thread.find({}).sort('-updatedAt')
  .populate('author', 'username')
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

var createData = (req, res) => {
  var myslug = npmslug(`${req.body.title}`)
  Thread.create({
    title: req.body.title,
    konten: req.body.konten,
    slug: myslug,
    author: req.body.author
  })
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

var getBySlug = (req, res) => {
  Thread.find({ slug:req.params.slug  })
  .populate('author', 'username')
  .then(result => {
    Respon.find({thread: result[0]._id}).sort('-updatedAt')
    .populate('author', 'username')
    .then(resultRes => {
      result.push(resultRes)
      res.send(result)
    })
  })
}

var createRespon = (req, res) => {
  Thread.find({ slug:req.params.slug })
  .populate('author', 'username')
  .then(result => {
    Respon.create({
      konten: req.body.konten,
      thread: result[0]._id,
      author: req.body.author
    })
    .then(creatResult => res.send(creatResult))
  })
}

var destroy = (req, res) => {
  Thread.remove({_id:req.params.id})
  .then(ok => {
    Respon.remove({thread:req.params.id})
    .then(resDel =>  res.send('data deleted'))
  })
}

module.exports = {
  findAll, createData, getBySlug, createRespon, destroy//, findById, createData, put, status, destroy
}
