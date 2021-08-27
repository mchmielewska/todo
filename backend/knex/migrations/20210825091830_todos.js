exports.up = function (knex) {
  return knex.schema
    .createTable('days', (table) => {
      table.increments();
      table.time('date');
    })
    .createTable('todos', (table) => {
      table.increments();
      table.string('title');
      table.string('description');
      table.time('time');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.integer('dayId').unsigned().notNullable();

      table
        .foreign('dayId')
        .references('id')
        .inTable('days')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('days').dropTableIfExists('todos');
};
