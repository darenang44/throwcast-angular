'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'));

app.listen(8888, function() {
  console.log('listening on port 8888...');
});
