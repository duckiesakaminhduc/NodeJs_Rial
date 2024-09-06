const express = require("express");
const connection = require("../config/database");
const User = require("../models/User");
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  User.create({
    username: username,
    email: email,
    password: password,
  });

  res.status(200).json({ message: "Success" });
};

const showUser = async (req, res) => {
  const docs = await User.find({});
  return res.status(200).json(docs);
};

const editUser = async (req, res) => {
  try {
    const { id } = req.query; // Lấy id từ req.params
    const { password } = req.body;
    if (!password || password.trim() === "")
      return res.status(400).json({ message: "Missing require fields" });
    var sql =
      "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    const [row, fields] = await connection.query(
      "update user set password = ? where id = ?",
      [password, id]
    );
    console.log(row, fields);
    return res.status(200).json({ id: row });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error: " + error });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const docs = await User.findById({ _id: id });
  return res.status(200).json(docs);
};

const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  await User.deleteOne({ _id: userId }); // returns {deletedCount: 1}
  return res.status(200).json({ message: "Delete success" });
};
module.exports = { registerUser, showUser, editUser, getById, deleteUserById };
