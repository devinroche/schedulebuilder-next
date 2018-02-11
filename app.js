const api = require('./routes/api');

const express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const bodyParser = require('body-parser');
const co = require('co');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.connect('mongodb://localhost/schedule-builder', { promiseLibrary: require('bluebird') })
    .then(function(){console.log('connection successful')})
    .catch(function(err){ console.error(err)});

co(function * () {
    yield app.prepare();

    const server = express();

    server.use(bodyParser.json());
    server.use('/api', api);

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(process.env.PORT || 3000);
    console.log(`Listening on ${process.env.PORT || 3000}`);
}).catch(error => console.error(error.stack));