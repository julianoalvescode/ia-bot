const express = require('express');
const app = express()
const assistant = require('./service/api-watson')
const client = require('./service/api-twilio')
const axios = require('axios').default;
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});

app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

app.get('/', (req, res) => {

  // client.messages
  // .create({
  //    mediaUrl: ['https://avatars2.githubusercontent.com/u/43914533?s=460&v=4'],
  //    from: 'whatsapp:+14155238886',
  //    body: `Este é você`,
  //    to: 'whatsapp:+5521969023070'
  //  })
  // .then(message => console.log(message.sid));
  
      res.send('<h1>IA Bot</h1>')
})

app.post('/sms', (req, res) => {

    const response = new MessagingResponse();
    const message = response.message();

    message.body(`Sua resposta é teste ${req.body.MessageSid}`)

    console.log(response)

    res.writeHead(200, {
      'Content-Type':'text/xml'
    });

    res.end(response.toString())

})

