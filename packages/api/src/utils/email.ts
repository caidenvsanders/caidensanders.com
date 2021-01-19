/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Nodemailer Imports
import nodemailer from 'nodemailer';

const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = process.env;

// Creates transporter object that will help us to send emails
const transporter = nodemailer.createTransport({
  port: 465,
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
const sendMail = ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  return new Promise((resolve, reject) => {
    const options = { from: MAIL_USER, to, subject, html };

    return transporter
      .sendMail(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Default Export sendMail Function
export default sendMail;
