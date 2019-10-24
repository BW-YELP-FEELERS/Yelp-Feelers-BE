
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('yfusers').insert([
        {username: 'test1', password: 'pass'},
        {username: 'test2', password: 'pass'},
        {username: 'test3', password: 'pass'}
      ]);
};
