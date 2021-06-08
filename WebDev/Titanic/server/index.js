/* 
author: Nikita G.
description: The middleware to run python scripts and allow data flow between the scripts and the frontend(React)
*/


const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var spawn = require("child_process").spawn;

app.post('/predictmodel', (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  var python = spawn('python', ["./model.py", JSON.stringify(req.body)]);

  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
  });

  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
  });
})

app.get('/getdata', (req, res) => {
  var largeDataSet = [];
  // spawn new child process to call the python script
  const python = spawn('python', ['eda.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    largeDataSet.push(data);
  });
  // in close event we are sure that stream is from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(largeDataSet.join(""))
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});





