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


app.get('/', (req, res) => {
  console.log('/ route hit');
  res.send({Message: 'This is the home route'});
})

app.post('/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);
  var data = {
    username: username,
    password: password
  }
  // if (req.body.username === element.dataValues.username){
  //   //Alert User Already Exist
  //   console.log("User Already Exist")
  //   flag += 1;
  // } else if (req.body.email === element.dataValues.email){
  //   console.log("Email Already Exists");
  //   flag += 1;
  // }

  // if (flag === 0) {
    //   db.Users.create({
    //     email: req.body.email,
    //     username: req.body.username,
    //     password: req.body.password
    //   })
    //   // testing to see if i can get the same username information back.
    //   .then(function(response) {
    //     db.users.findAll({ where: {username: req.body.username}}).then(function(response) {
    //       console.log(response);
    //       res.send(response[0].dataValues);
    //     })
    //   });
    // };

  res.send(data);
});

app.post('/signUp', (req, res) => {
  var flag = 0;
  console.log(req.body);
  models.Users.create({
    username: req.body.username,
    userPassword: req.body.password,
    firstName: 'test',
    lastName: 'last name',
    email: req.body.email
  }).then(function(results) {
    console.log(results);
    res.send(results);
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