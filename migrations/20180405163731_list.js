exports.up = (knex, Promise) => {
  return knex.schema.createTable('list', table => {
    table.increments('id').primary()
    table.integer('item_id').references('items.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('list')
}
