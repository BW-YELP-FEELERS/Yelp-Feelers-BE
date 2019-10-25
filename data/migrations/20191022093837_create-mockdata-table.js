
exports.up = function(knex) {
    return knex.schema.createTable('mockreviews', (reviewtable) => {
        reviewtable.increments()

        reviewtable.string('business_id', 128)
        .notNullable()

        reviewtable.string('business_name', 128)
        .notNullable()

        reviewtable.string('address', 128)
        .notNullable()

        reviewtable.string('city', 128)
        .notNullable()

        reviewtable.string('state', 128)
        .notNullable()

        reviewtable.string('postal_code', 128)
        .notNullable()

        reviewtable.float('latitude', 14,10)
        .notNullable()

        reviewtable.float('longitude', 14,10)
        .notNullable()

        reviewtable.string('categories', 255)
        .notNullable()

        reviewtable.decimal('yelp_store_rating')
        .notNullable()

        reviewtable.decimal('adjusted_store_rating')
        .notNullable()

        reviewtable.decimal('original_yelp_user_rating')
        .notNullable()

        reviewtable.decimal('adjusted_sentiment_rating')
        .notNullable()

        reviewtable.string('user_id', 128)
        .notNullable()

        reviewtable.string('name', 128)
        .notNullable()

        reviewtable.text('original_text_review', 'longtext')
        .notNullable()

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('mockreviews')
};
