"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const index_1 = require("./config/index");
require("module-alias/register");
require("express-async-errors");
const rest_server_1 = require("./config/server/rest.server");
const app = (0, rest_server_1.createRestServer)();
const httpServer = (0, http_1.createServer)(app);
httpServer.listen(index_1.config.API.PORT, () => {
    console.log('server listen');
});
