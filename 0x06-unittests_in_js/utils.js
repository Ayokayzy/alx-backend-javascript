const Utils = {
  calculateNumber: function (c, a, b) {
    if (c === "SUM") {
      return Math.round(a) + Math.round(b);
    }
    if (c === "SUBTRACT") {
      return Math.round(a) - Math.round(b);
    }
    if (c === "DIVIDE") {
      if (Math.round(b) !== 0) {
        return Math.round(a) / Math.round(b);
      }
      return "Error";
    }
  },
};

module.exports = Utils;
