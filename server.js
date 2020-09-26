const { decodeBase64 } = require('bcryptjs');
// Set up Dependencies
const express = require('express');

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
require('./routes/html-routes.js')(app);
require('/routes/api-routes.js')(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});
