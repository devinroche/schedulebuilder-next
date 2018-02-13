const courses = require('./routes/api/courses');
const schedules = require('./routes/api/schedules');

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const bodyParser = require('body-parser');
const co = require('co');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { promiseLibrary: require('bluebird') })
    .then(function(){console.log('connection successful')})
    .catch(function(err){ console.error(err)});

co(function * () {
    yield app.prepare();

    const server = express();

    server.use(bodyParser.json());
    server.use('/api/courses', courses);
    server.use('/api/schedules', schedules);

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(process.env.PORT || 3000);
    console.log(`Listening on ${process.env.PORT || 3000}`);
}).catch(error => console.error(error.stack));