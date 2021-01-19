/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Dotenv Import
import * as dotenv from 'dotenv';

// Nodemailer Imports
import nodemailer from 'nodemailer';

// Initialize Dotenv
dotenv.config();

const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = process.env;

// Creates transporter object that will help us to send emails
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: MAIL_SERVICE,
  secure: true,
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
const sendMail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<unknown> => {
  return new Promise(async (resolve, reject) => {
    const options = {
      from: MAIL_USER,
      to,
      subject,
      html,
    };

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
