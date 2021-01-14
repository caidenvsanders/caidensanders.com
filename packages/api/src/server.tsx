/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Dotenv Import & Initialization
import * as dotenv from 'dotenv';
dotenv.config();

// Express Imports
import express from 'express';
import bodyParser from 'body-parser';

// Mailer Imports
import sendMail from './utils/email';

// Accessories Imports
import cors from 'cors';
import fs from 'fs';
import path from 'path';

// Initialize express application
const app = express();
app.use(bodyParser.json());

/**
 * Hydrate the server with the react application (server side rendering)
 */
app.get('/', (req, res) => {});

/**
 * Send myself an email on contact form submission
 */
app.post('/email', (req, res) => {
  sendMail({
    to: 'caidensanders@gmail.com',
    subject: `${req.body.email_name as string} ${
      req.body.email_from as string
    }`,
    html: req.body.email_message as string,
  });
  res.send(
    `Email Name: ${req.body.email_name} \nEmail From: ${req.body.email_from} \nEmail Message: ${req.body.email_message}`,
  );
});

// Set cors options and enable cors
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

// Listen to HTTP
const PORT = process.env.PORT || process.env.API_PORT;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
