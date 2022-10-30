const { DateTime } = require("luxon");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)
  }
];

module.exports = messages