const express = require("express");
const connection = require("../config/database");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Kiểm tra user và email
    const [rows, fields] = await connection.query(
      "SELECT * FROM user WHERE username = ? OR email = ?",
      [username, email]
    );
    console.log("Rows:", rows);

    if (rows.length > 0) {
      return res
        .status(409)
        .json({ message: "Username or Email already exists" });
    }

    // Thêm user mới
    const [result] = await connection.query(
      "INSERT INTO user (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const showUser = async (req, res) => {
  try {
    const [rows, fields] = await connection.query("Select * from user");
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Interal server error" });
  }
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
module.exports = { registerUser, showUser, editUser };
