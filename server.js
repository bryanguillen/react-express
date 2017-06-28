const express = require('express');
const app = express();
const morgan = require('morgan');
const { data } = require('./sampleData');

app.use(morgan('common'));

app.get('/', (req, res) => {
	res.status(200).json(data);
})

app.listen(3001, () => {
	console.log('Your app is listening on localhost:3001');
})