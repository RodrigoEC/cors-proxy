"use strict";
exports.__esModule = true;
exports.app = void 0;
var server_ts_1 = require("./server-ts");
var bodyLimit = typeof (process.argv[2]) != 'undefined' ? process.argv[2] : '100kb';
console.log('Using limit: ', bodyLimit);
exports.app = server_ts_1.Server.bootstrap(bodyLimit).app;
exports.app.set('port', process.env.PORT || 3001);
exports.app.listen(exports.app.get('port'), function (err) {
    if (!err)
        console.log('Proxy server listening on port ' + exports.app.get('port'));
    else {
        console.error(err);
    }
});
