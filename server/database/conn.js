const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

async function connect() {
  // const mongod = await MongodbMemoryServer.create();
  // console.log(mongod);
  // const getUri = mongod.getUri();

  const mongod = new MongoMemoryServer();
  await mongod.start();
  const getUri = mongod.getUri();

  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(getUri);
  console.log("Database Connected");
  return db;
}

module.exports = connect;
