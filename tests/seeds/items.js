
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(() => {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1001, name: 'cat-food', price: 1.5, image: '/images/cat-food.jpeg', description: 'kep your cats alive and feed them this food'},
        {id: 1002, name: 'cookies', price: 2, image: '/images/cookies.jpg', description: 'keep your cookie monster alive and feed them these cookies'},
        {id: 1003, name: 'crisps', price: 3.5, image: '/images/crisps.gif', description: 'crips because we\'re in the uk now i guess'},
        {id: 1004, name: 'fruit-salad', price: 6, image: '/images/fruit-salad.jpeg', description: 'who deosn\'t love fruit salad?'},
        {id: 1005, name: 'fruit-spread', price: 2, image: '/images/fruit-spread.jpg', description: 'not really sure what this is about- guess it\'s technically just jam right?'},
        {id: 1006, name: 'limes', price: 93, image: '/images/limes.jpeg', description: 'these are expensve to reflect real life'},
        {id: 1007, name: 'pickles', price: 6.3, image: '/images/pickles.png', description: 'green for go(buy these pickles)'},
        {id: 1008, name: 'spaghetti', price: 2.6, image: '/images/spaghetti.png', description: 'crowd pleaser, in a crowd of 0-99 year olds'}
      ])
    })
}
