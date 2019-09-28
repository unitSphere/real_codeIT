let express = require('express');
let app = express();

let dependencyManager = require('./routes/dependencyManager.js');

app.use('/', dependencyManager);


// to catch any other path and return 404
app.use(function (req, res) {
    res.status(404).send("Sorry can't find that in Cable data api!")
});

// app.listen(3000, () => console.log('Start listening on port 3000!'));
