var express = require('express');

var app = express()

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname + '/public/' });
});

app.get('/:date', function (req, res) {
  var input = req.params.date;
  var date;
  var obj = {};
  
  if (Number.isInteger(+input)) {
    date = new Date(+input);
  } else {
    date = new Date(req.params.date);
  }

  if (isNaN(date.getTime())) {
    obj.unix = null;
    obj.natural = null;
  } else {
    obj.unix = date.getTime();
    obj.natural = date.toLocaleString("en-us", { month: "long", year: "numeric", day: "numeric" });
  }

  res.send(JSON.stringify(obj));
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})