'use strict';

const express = require('express');
const server = express();
const router = require('./route/project_routes');
const morgan = require('morgan');

server.use(morgan('dev'));
server.use('/', router);


module.exports = server;
