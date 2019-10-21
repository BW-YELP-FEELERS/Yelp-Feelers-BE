
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('yfusers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('yfusers').insert([
        {username: 'test1', password: 'pass'},
        {username: 'test2', password: 'pass'},
        {username: 'test3', password: 'pass'}
      ]);
    });
};
