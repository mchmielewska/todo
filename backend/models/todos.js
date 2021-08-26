const knex = require('knex');
const config = require('../knexfile');
const db = require('../db-config');

exports.addTodo = async (todo) => {
    const dayId = parseInt(todo.dayId, 10);
    const [id] = await db('todos').where({dayId: dayId}).insert(todo);
    return exports.findTodoById(id)
}

exports.findAllForDay = ( dayId ) => {
    return db('todos').where({ dayId })
}

exports.findTodoById = (id) => {
    return db('todos').where({ id }).first();
}

exports.findAll = () => {
    return db('todos');
  };