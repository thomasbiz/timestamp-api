var express = require('express');

var app = express()

app.get('/:date', function (req, res) {
  var date = new Date(req.params.date);
  var obj = {};
  if (isNaN(date.getTime())) {
    obj.unix = null;
    obj.natural = null;
  } else {
    obj.unix = date.getTime() / 1000;
    obj.natural = date.toLocaleString("en-us", { month: "long", year: "numeric", day: "numeric" });
  }

  res.send(JSON.stringify(obj));
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})