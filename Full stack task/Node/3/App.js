const express = require('express');
const bodyParser = require('body-parser');
const loggerMiddleware = require('./LoggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Form submitted successfully! Name: ${name}, Email: ${email}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
