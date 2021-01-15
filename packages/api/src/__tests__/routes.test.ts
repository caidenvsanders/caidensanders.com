import axios from 'axios';

describe('/email API', () => {
  const url = 'http://localhost:4000/email';

  const EMAIL_NAME = 'Caiden Sanders';
  const EMAIL_FROM = 'caidensanders@gmail.com';
  const EMAIL_MESSAGE = 'Hey! This is Caiden Sanders.';

  it('/email POST should return response: 200', async () => {
    const result = await axios({
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email_name: EMAIL_NAME,
        email_from: EMAIL_FROM,
        email_message: EMAIL_MESSAGE,
      },
    });
    expect(result.status).toBe(200);
  });

  it('/email POST should return correct data', async () => {
    const result = await axios({
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email_name: EMAIL_NAME,
        email_from: EMAIL_FROM,
        email_message: EMAIL_MESSAGE,
      },
    });
    expect(result.data).toBe(
      `Email Name: ${EMAIL_NAME} \nEmail From: ${EMAIL_FROM} \nEmail Message: ${EMAIL_MESSAGE}`,
    );
  });
});
