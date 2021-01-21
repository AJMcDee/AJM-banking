const router = require("express").Router();

const depositFunds = require("../controllers/depositFunds");
const withdrawFunds = require("../controllers/withdrawFunds");
const displayBalance = require("../controllers/displayBalance");

// we export a function that returns the express router
// this will be executed on server start to be able to use our endpoints
// think of this as an extension to our express setup: we just add more endpoints to it

// since the requests have already gone through our middlewares in server.js,
// we do not take care of them in here
// however, we can add more middleware in router.post() if we need to do other stuff in here
module.exports = () => {
  router.post("/deposit", depositFunds);
  router.post("/withdraw", withdrawFunds);
  router.post("/balance", displayBalance);

  return router;
};
