
exports.up = function(knex) {
    return knex.schema.createTable('reviews', (table) => {
        table.increments()

        table.string('business_id', 128)
        .notNullable()

        table.string('business_name', 128)
        .notNullable()

        table.string('address', 128)
        .notNullable()

        table.string('city', 128)
        .notNullable()

        table.string('state', 128)
        .notNullable()

        table.string('postal_code', 128)
        .notNullable()

        table.float('latitude', 14,10)
        .notNullable()

        table.float('longitude', 14,10)
        .notNullable()

        table.string('categories', 255)
        .notNullable()

        table.decimal('yelp_store_rating')
        .notNullable()

        table.decimal('adjusted_store_rating')
        .notNullable()

        table.decimal('original_yelp_user_rating')
        .notNullable()

        table.decimal('adjusted_sentiment_rating')
        .notNullable()

        table.string('user_id', 128)
        .notNullable()

        table.text('original_text_review', 'longtext')
        .notNullable()

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reviews')
};
