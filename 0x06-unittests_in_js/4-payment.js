const Utils = require("./utils");

const sendPaymentRequestToAPI = (totalAmount, totalShipping) => {
  const sum = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
};

module.exports = sendPaymentRequestToAPI;
