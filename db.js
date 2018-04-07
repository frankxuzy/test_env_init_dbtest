const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getItem,
  getItems,
  addToList,
  addComment,
  getCartList,
  delItem,
  getTotalPrice,
  getComments
}

function getItems (conn = connection) {
  // return new Promise((resolve, reject) => {
  //   resolve([
  //     {id: 1, name: 'potato', price: 5, image: 'https://images-na.ssl-images-amazon.com/images/I/41e3mk2yAiL._SL500_AC_SS350_.jpg'}
  //   ])
  // })
  return conn('items').select()
}

function getItem (itemid, conn = connection) {
  return conn('items')
    .then((itemsArr) => {
      return itemsArr.find(item => item.id === itemid)
    })
}

function addToList (itemid, conn = connection) {
  return conn('list').insert({item_id: itemid})
}

function getCartList (conn = connection) {
  return conn('list')
    .join('items', 'items.id', '=', 'list.item_id')
    .select('list.id as listid', 'items.id as itemid', 'items.name', 'items.price', 'items.image', 'items.description')
}

function delItem (listid, conn = connection) {
  return conn('list')
    .where('id', '=', listid)
    .del()
}

function getTotalPrice (itemslist) {
  let sum = 0
  itemslist.forEach(item => {
    sum += item.price
  })
  return sum
}

function addComment (comment, conn = connection) {
  return conn('comments').insert(comment)
}

function getComments (itemid, conn = connection) {
  return conn('comments')
    .where('item_id', '=', itemid)
    .select('comment')
}
