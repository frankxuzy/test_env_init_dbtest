exports.up = (knex, Promise) => {
  return knex.schema.createTable('comments', table => {
    table.increments('id').primary()
    table.integer('item_id')
    table.string('comment')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('comments')
}
