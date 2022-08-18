exports.up = (knex) => {
  return knex.schema.createTable('manaia', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('img')
    table.string('quote')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('manaia')
}
