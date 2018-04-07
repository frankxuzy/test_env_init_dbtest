
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 2001, item_id: 1001, comment: 'haiiii'},

      ])
    })
}
