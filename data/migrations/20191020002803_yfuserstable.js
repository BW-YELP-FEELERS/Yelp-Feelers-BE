
exports.up = function(knex) {
    return knex.schema.createTable('yfusers', (table) => {
        table
        .increments()

        table
        .string('username', 128)
        .unique()
        .notNullable()

        table
        .string('password', 128)
        .notNullable()

        table
        .timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('yfusers')
};
