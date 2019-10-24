
exports.up = function(knex) {
    return knex.schema.createTable('favorites', (table) => {
        table.increments().primary()

        table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('yfusers')
        .onUpdate('CASCADE')

        table.integer('review_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('livereviews')    
        .onUpdate('CASCADE')

        //  this is to protect our database from having two of the same combinations of FKs.
        table.unique(['user_id', `review_id`])
        // alternatively, could do table.primary({'user_id', 'review_id})
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('favorites');
};
