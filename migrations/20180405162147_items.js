exports.up = (knex, Promise) => {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('price')
    table.string('image')
    table.string('description')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('items')
}
