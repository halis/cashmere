
global.expect = require('chai').expect;
global.request = require('axios');
global.describe = require('./describe');
global.context = require('./context');
global.it = require('./it');

global.xdescribe = () => null;
global.xit = () => null;
global.xcontext = () => null;
