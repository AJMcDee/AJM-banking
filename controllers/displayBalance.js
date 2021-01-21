function displayBalance(req, res) {
  console.log(req.body.token);
  res.myDataClient
    .collection("accounts")
    .findOne({ currentToken: req.body.token }, (err, result) => {
      if (err || result === null)
        return res.status(400).send("Account not found");
      res.status(200).send(`${result.balance}`);
    });
}

module.exports = displayBalance;
