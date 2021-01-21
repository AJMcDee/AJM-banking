function changeBalance(action, amount) {
  switch (action) {
    case "deposit":
      currentUser.balance += amount;
      break;
    case "withdraw":
      currentUser.balance -= amount;
      break;
    default:
      break;
  }
}

module.exports = changeBalance;
