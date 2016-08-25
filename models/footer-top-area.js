'use strict';
var fs = require('fs');
module.exports = function () {
    return  {
    	data: JSON.parse(fs.readFileSync(__dirname + '/json/footer-top-area.json')),
    	schema: JSON.parse(fs.readFileSync(__dirname + '/json/footer-top-area-schm.json'))
    };
};
