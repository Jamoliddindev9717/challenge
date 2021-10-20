const mongoose = require("mongoose");

module.exports = () => {
  const uri =
    "mongodb+srv://Jamoliddin:qwerty750@cluster0.dktr4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const db = mongoose.connection;

  mongoose.connect(uri, {
    useNewUrlParser: true,
  });

  db.on("open", () => {
    console.log("server running");
  });

  db.on("error", () => {
    console.log("server error");
  });
};
