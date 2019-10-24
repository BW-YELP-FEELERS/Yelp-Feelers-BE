
exports.up = function(knex) {
    return knex.schema.createTable('favorites', (table) => {
        table.increments().primary()

        table.integer('user_id')
        .unsigned()
        .notNullable()

        table.foreign('user_id')
        .references('id')
        .inTable('yfusers')

        table.integer('review_id')
        .unsigned()
        .notNullable()

        table.foreign('review_id')
        .references('id')
        .inTable('livereviews')    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('favorites');
};
