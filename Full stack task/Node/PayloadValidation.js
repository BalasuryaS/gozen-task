const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({ errors: errors.array() });
};

const userValidationRules = [
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().withMessage('Invalid email address')
];

app.post('/users', userValidationRules, validateRequest, (req, res) => {
  res.send('User created successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
