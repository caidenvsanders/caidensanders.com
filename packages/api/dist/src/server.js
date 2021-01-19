"use strict";
/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// Express Imports
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
// Accessories Imports
var cors_1 = __importDefault(require("cors"));
// Dotenv Import
var dotenv = __importStar(require("dotenv"));
// Mailer Imports
var email_1 = __importDefault(require("./utils/email"));
// Initialize Dotenv
dotenv.config();
// Initialize express application
var app = express_1.default();
app.use(body_parser_1.default.json());
/**
 * Hydrate the server with the react application (server side rendering)
 */
app.get('/', function (req, res) { });
/**
 * Send myself an email on contact form submission
 */
app.post('/email', function (req, res) {
    email_1.default({
        to: 'me@caidensanders.com',
        subject: req.body.emailName + " " + req.body.emailFrom,
        html: req.body.emailMessage,
    }).catch(function (err) { return console.error(err); });
    res.send("Email Name: " + req.body.emailName + " \nEmail From: " + req.body.emailFrom + " \nEmail Message: " + req.body.emailMessage);
});
// Set cors options and enable cors
var corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};
app.use(cors_1.default(corsOptions));
// Listen to HTTP
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : process.env.API_PORT;
app.listen({ port: PORT }, function () {
    console.log("Server ready at http://localhost:" + PORT);
});
