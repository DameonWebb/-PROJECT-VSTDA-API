const app = require('./app');
const server = require('./app');

// write your code here
const port = 3000;
app.get('/', (req, res) => {
	res.status(200).send("ok");
 });