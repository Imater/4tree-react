'use strict';

var fs = require('fs');
var _dir = __dirname;

var getServiceNames = function(){
    var serviceNames = ['app']; //initialize with app (its not in dir but need)
    fs.readdirSync(_dir).forEach(function(file){
        var stat = fs.statSync(_dir + '/' + file);
        if(stat.isDirectory()){
            serviceNames.push(file);
        }
    });
    return serviceNames;
};

module.exports = {
    getAllServices: function(){
        return getServiceNames();
    }
};
