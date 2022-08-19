exports.seed = function (knex) {
  const empty = (table) => () => knex(table).del()

  return empty('manaia')()
  // Chain calls to empty in
  // order as required, e.g.:
  // .then(empty('profiles'))
}
