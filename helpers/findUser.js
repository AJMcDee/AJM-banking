function findUser(req, res, next) {
  res.myDataClient
    .collection("accounts")
    .findOne({ currentToken: req.body.token }, (err, result) => {
      if (err) return res.status(400).send("Account not found");
      next();
    });
}

module.exports = findUser;
