const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const routes = require('./routes');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.use('/api', routes);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
