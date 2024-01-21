const db = require("../models");
const Users = db.users;
const bcrypt = require('bcryptjs');

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({ username, password: hashedPassword });

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ user: user });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const logoutUser = (req, res) => {
  res.send('Logout successful');
};

module.exports = {
  getUsers,
  getUserById,
  registerUser,
  loginUser,
  logoutUser,
};
