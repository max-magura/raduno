// Once you open the project, make sure you are in the root (raduno)
// 1.) run npm install. Let that finish
// 2.) Then in your console type 'npm run client-install'.
// That will cd into the client folder and run npm install for you.

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.get('/', (req, res) => {
  console.log('/ route hit');
  res.send({Message: 'This is the home route'});
})

app.get('/login', (req, res) => {
  res.send({Login: "Route Hit"});
});

app.get('/signUp', (req, res) => {
  res.send({SignUp: 'Route Hit'});
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

app.get('/event/rsvp', (req, res) => {
  res.send({RSVP: "Route Hit"});
});

app.get('/event/info/:id', (req, res) => {
  res.send({EventInfo: `Route Hit. Event Info Id: ${req.params.id}`});
});



app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`)
})