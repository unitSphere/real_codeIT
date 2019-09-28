let express = require('express');
let app = express();

let dependencyManager = require('./routes/dependencyManager.js');

app.use('/', dependencyManager);


// to catch any other path and return 404
app.use(function (req, res) {
    res.status(404).send("Sorry can't find that in CUplanner data api!")
});

module.exports = app;