/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Express Imports
import express from 'express';
import bodyParser from 'body-parser';

// Accessories Imports
import cors from 'cors';

// Dotenv Import
import * as dotenv from 'dotenv';

// Mailer Imports
import sendMail from './utils/email';

// Initialize Dotenv
dotenv.config();

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
app.post(
  '/email',
  (
    req: {
      body: { emailName: string; emailFrom: string; emailMessage: string };
    },
    res,
  ) => {
    sendMail({
      to: 'me@caidensanders.com',
      subject: `${req.body.emailName} ${req.body.emailFrom}`,
      html: req.body.emailMessage,
    }).catch((err) => console.error(err));

    res.send(
      `Email Name: ${req.body.emailName} \nEmail From: ${req.body.emailFrom} \nEmail Message: ${req.body.emailMessage}`,
    );
  },
);

// Set cors options and enable cors
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

// Listen to HTTP
const PORT = process.env.PORT ?? process.env.API_PORT;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT as string}`);
});
