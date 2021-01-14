"use strict";
/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Nodemailer Imports
var nodemailer_1 = __importDefault(require("nodemailer"));
var _a = process.env, MAIL_SERVICE = _a.MAIL_SERVICE, MAIL_USER = _a.MAIL_USER, MAIL_PASS = _a.MAIL_PASS;
// Creates transporter object that will help us to send emails
var transporter = nodemailer_1.default.createTransport({
    service: MAIL_SERVICE,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
});
/**
 * Sends an email to user
 *
 * @param {string} to email address where to send mail
 * @param {string} subject of the email
 * @param {string} html content of the email
 */
var sendMail = function (_a) {
    var to = _a.to, subject = _a.subject, html = _a.html;
    return new Promise(function (resolve, reject) {
        var options = { from: MAIL_USER, to: to, subject: subject, html: html };
        return transporter
            .sendMail(options)
            .then(function (response) {
            resolve(response.data);
        })
            .catch(function (error) {
            reject(error);
        });
    });
};
// Default Export sendMail Function
exports.default = sendMail;
