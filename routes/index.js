var express = require('express');
var router = express.Router();

// ----------------------- SETTING UP THE CREDENTIALS-------------------
// ---------------------------------------------------------------------
const credentials = {
  apiKey: 'd97a58b356ac61526108429eaf7c2788abf71fe152f592b72fb29292cd01b86b',
  username: 'sandbox',
}

// ----------------------- INITIALIZE THE SDK-------------------
// -------------------------------------------------------------
const AfricasTalking = require('africastalking')(credentials); 

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// ----------------------- SETTING THE SMS SERVICE-------------------
// -------------------------------------------------------------
const sms = AfricasTalking.SMS;

// ----------------------- EXECUTING THE SMS SERVICE-------------------
// -------------------------------------------------------------
function sendMessage() {

  router.post('/', (req,res) => {
    const { name, phone, comment } = req.body;
    const options = {
      // Set the numbers you want to send to in international format
      to: phone,
      // Set your message
      message: comment,
      // Set your shortCode or senderId
      from: name
  }

  res.send(options);

  sms.send(options)
      .then(console.log)
      .catch(console.log);
  

  });
        
}

sendMessage();

module.exports = router;
