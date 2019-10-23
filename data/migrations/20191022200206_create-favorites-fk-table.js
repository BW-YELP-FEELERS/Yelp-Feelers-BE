
exports.up = function(knex) {
    knex.schema.createTable('favorites', function (tbl) {
        tbl.foreign('user_id').references('id').inTable('yfusers');
        tbl.foreign('review_id').references('id').inTable('livereviews');
    });
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('favorites');
};
