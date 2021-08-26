const knex = require('knex');
const config = require('../knexfile');
const db = require('../db-config');

exports.findById = (dayId) => {
  return db('days').where({ id: dayId }).first();
};

exports.addDay = async (day) => {
  const [id] = await db('days').insert(day);
  return exports.findById(id)
}

exports.findAll = () => {
  return db('days');
};

exports.findByDate = (date) => {
  return db('days')
    .where({ date: date })
    .first()
    .then((row) => {
      if (!row) return Promise.reject('Record not found');
      return row;
    });
};
