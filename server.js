// Once you open the project, make sure you are in the root (raduno)
// 1.) run npm install. Let that finish
// 2.) Then in your console type 'npm run client-install'.
// That will cd into the client folder and run npm install for you.
const db = require('./DB Help/connection');
const models = require('./DB Help/models/Export');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const bcrypt = require('bcrypt');
const saltRounds = 8;
const myPlaintextPassword = '';
const someOtherPlaintextPassword = 'not_bacon';
var hashHolder = '';



app.get('/', (req, res) => {
  console.log('/ route hit');
  res.send({Message: 'This is the home route'});
})

app.post('/login', (req, res) => {
  // console.log(req)
  const username = req.body.username
  const password = req.body.password
  console.log(username,'*******');
  models.Users.findOne({ where: {username: username} }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    } else {
      const match = bcrypt.compare(password, user.dataValues.userPassword);
    
      if(match) {
          console.log('yay');
      }
      
    }
  console.log(user);
    // async function checkUser(username, password) {
      //... fetch user from a db etc.
   
   
      //...
  // }
  })
});


app.post('/signUp', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    console.log(hash);
    hashHolder = hash;
    setTimeout(hashPrint, 1000);
    
    function hashPrint() {
      bcrypt.compare(myPlaintextPassword, hashHolder, function(err, results) {
        if (err) throw err;
        console.log(results);
      });
    }
    
    var flag = 0;
    console.log(hashHolder,'***********');
    models.Users.create({
      username: req.body.username,
      userPassword: hashHolder,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }).then(function(results) {
      console.log(results.body);
        res.send(results);
      });
    });
  });
  

app.get('/myEvents', (req, res) => {
  res.send({MyEvents: 'Route Hit'});
});

app.get('/event/create', (req, res) => {
  res.send({CreateEvent: 'Route Hit'});
});

app.get('/event/:id', (req, res) => {
  res.send({Event: `Loaded ${req.params.id} Event`});
});

app.get('/event/rsvp/:id', (req, res) => {
  res.send({RSVP: "Route Hit"});
});

app.get('/event/info/:id', (req, res) => {
  res.send({EventInfo: `Route Hit. Event Info Id: ${req.params.id}`});
});



app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`)
})