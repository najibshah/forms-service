const { ServerApiVersion } = require("mongodb");
const { default: mongoose } = require("mongoose");
const { default: accessEnv } = require("../src/helpers/accessEnv");

//URI for mongoDB database
const uri = accessEnv("MONGODB_URI");

module.exports = {
  connectToServer: () => {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
      })
      .then(() =>
        console.log("Forms service successfully connected to MongoDB.")
      )
      .catch((err) => console.log(err));
  },
  getDb: function () {
    return database;
  },
};
