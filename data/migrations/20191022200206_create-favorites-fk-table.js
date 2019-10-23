
exports.up = function(knex) {
    knex.schema.createTable('favorites', function (tbl) {
        tbl.foreign('user_id').references('id').inTable('yfusers').comment('This is the users Foreign Key');
        tbl.foreign('review_id').references('id').inTable('livereviews').comment('This is the review Foreign Key');
    });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('favorites');
};
