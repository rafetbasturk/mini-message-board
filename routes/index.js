var express = require('express');
var router = express.Router();
const {
  messages_get,
  newMessage_get,
  newMessage_post
} = require("../controllers/messageController")

/* GET home page. */
router.get('/', messages_get);

router.route('/new')
  .get(newMessage_get)
  .post(newMessage_post)

module.exports = router;
