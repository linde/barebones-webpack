

STATIC=process.env.npm_package_config_dir || "docroot";
PORT=process.env.npm_package_config_e2e_port || 8080;

var express = require('express');
var app = express();
app.use(express.static(STATIC));
app.listen(PORT);

console.log(`static site serving ${STATIC} on ${PORT} ...`);

