const User = require("./model");
const users = [
  { id: 1, name: "LAKSHMAN" },
  { id: 2, name: "Prabash" },
];

const getUsers = (req, res, next) => {
  User.find()
    .then((responce) => {
      res.json({ responce });
    })
    .catch((error) => {
      res.json({ error });
    });
};
const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,
    name: req.body.name,
  });
  user
    .save()
    .then((responce) => {
      res.json({ responce });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateUser = (req, res, next) => {
  const { id, name } = req.body;
  User.updateOne({ id: id }, { $set: { name: name } })
    .then((responce) => {
      res.json({ responce });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const deleteUser = (req, res, next) => {
  const id = req.body.id;
  User.deleteOne({ id: id })
    .then((responce) => {
      res.json({ responce });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
