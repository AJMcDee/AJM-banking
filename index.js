// BANK APPLICATION

// Import dependencies

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import Environmentals

require("dotenv").config();

console.log(process.env.DBPASSWORD);

// Import controllers
const authenticateUser = require("./controllers/authenticateUser");

// Import middleware

const findUser = require("./helpers/findUser");

// Import router/s

const bankingRouter = require("./routers/bankingRouter");

// Global constants

const port = process.env.PORT || 3552;

// App settings

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // for application/x-www-form-urlencoded requests
app.use(bodyParser.json()); // for application/json requests
app.use(express.static(path.join(__dirname, "ajm-banking", "build")));

// Connect to Database
// const dbUsername = process.env.DBUSER;
// const dbPassword = process.env.DBPASSWORD;
// const dbName = process.env.DBNAME;

const MongoClient = require("mongodb").MongoClient;
// const uri = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.vfa9g.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(function (err, db) {
  if (err) throw err;
  const database = db.db("bank");

  function initialiseDb(req, res, next) {
    res.myDataClient = database;
    next();
  }

  app.get("/*", (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, "ajm-banking", "build", "index.html"));
  });

  // POST banking requests
  app.post("/authenticate", initialiseDb, authenticateUser);
  app.use("/", initialiseDb, findUser, bankingRouter());
});

// Listen to port

app.listen(port, () => {
  console.log(`Server active on  http://localhost:${port}`);
});
