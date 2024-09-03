const registerUser = (req, res) => {
  const name = req.body.user; // Lấy dữ liệu từ form
  res.send(`User: ${name}`); // Gửi phản hồi chỉ một lần
  console.log(name);
};

module.exports = { registerUser };
