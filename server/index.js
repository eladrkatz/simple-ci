     
const express = require('express');
const cors = require('cors');

const logger = require('./lib/logger');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.get('/', (req, res) => res.send('Simple CI Server Online'));

app.listen(4001, () => console.log('Started server at 4001'));
