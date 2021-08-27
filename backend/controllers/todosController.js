const todos = require('../models/todos');
const days = require('../models/days');

exports.addTodo = async (req, res) => {
  let { date, time, title, description } = req.body;

  days
    .findByDate(date)
    .then((day) => {
      let todo = todos.addTodo({
        dayId: day.id,
        title: title,
        description: description,
        time: time,
      });
      return todo;
    })
    .then(
      (todo) => {
        return res.status(200).json(todo);
      },
      () => {
        days.addDay({ date }).then((day) => {
          let todo = todos.addTodo({
            dayId: day.id,
            title: title,
            description: description,
            time: time,
          });
          return todo;
        });
      }
    );
};

exports.getTodo = async (req, res) => {};

exports.getAllDays = async (req, res) => {
  days
    .findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Unable to perform request' });
    });
};

exports.getAllTodosForDay = async (req, res) => {
  const { date } = req.params;
  console.log(date);

  days
    .findByDate(date)
    .then((day) => {
      return day.id;
    })
    .then((dayId) => {
      let day = todos.findAllForDay(dayId);
      return day;
    })
    .then(
      (data) => {
        console.log(data);
        res.status(200).json(data);
      },
      () => {
        res.status(404).json({ message: 'Date not found' });
      }
    )

    .catch((error) => {
      res.status(500).json({ message: 'Unable to perform request' });
    });
};
