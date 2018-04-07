
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(() => {
      // Inserts seed entries
      return knex('list').insert([
        {id: 3001, item_id: 1001}
      ])
    })
}
