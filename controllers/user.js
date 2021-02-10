const { response } = require('express')

const userGet = (req = request, res = response) => {

  const { q, name = 'No name', apikey, page, limit } = req.query

  res.json({
    msg: 'get API - Controlador',
    q,
    name,
    apikey,
    page,
    limit
  })
}

const userPost = (req, res = response) => {

  const { nombre, edad } = req.body

  res.json({
    msg: 'post API - userPost',
    nombre,
    edad
  })
}

const userPut = (req, res = response) => {

  const { id } = req.params

  res.json({
    msg: 'put API - userPut',
    id
  })
}

const userPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - Controlador'
  })
}

const userDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - Controlador'
  })
}


module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete
}
