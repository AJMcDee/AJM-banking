function withdrawFunds(req, res) {
  const amount = parseFloat(req.body.amount);
  res.myDataClient
    .collection("accounts")
    .findOne({ currentToken: req.body.token }, (err, result) => {
      if (err) return res.status(400).send(`Error. Account not found.`);
      const balance = result.balance;
      if (amount > balance) return res.status(400).send(`Insufficient Funds`);
      const newBalance = balance - amount;
      res.myDataClient
        .collection("accounts")
        .updateOne(
          { currentToken: req.body.token },
          { $set: { balance: newBalance } }
        );

      res.status(200).send(`
          You have successfully withdrawn ${amount} from your account.`);
    });
}

module.exports = withdrawFunds;
