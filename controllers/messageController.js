const messages = require("../models/messageModel")
const { DateTime } = require("luxon");

const messages_get = (req, res) => {
  res.render('index', { title: 'Home', messages });
}

const newMessage_get = (req, res) => {
  res.render('new', { title: 'New message' });
}

const newMessage_post = (req, res) => {
  const newMessage = {
    ...req.body,
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)
  }
  messages.push(newMessage)
  res.redirect("/")
}

module.exports = {
  messages_get,
  newMessage_get,
  newMessage_post
}