const express = require('express');
const morgan = require('morgan');
const app = express();

app.listen(3000, (req, res) => {
	console.log('listening on port 3000...')
})

// add your code here
let arr = [
	{
		todoItemId: 0,
		name: 'an item',
		priority: 3,
		completed: false
	},
	{
		todoItemId: 1,
		name: 'another item',
		priority: 2,
		completed: false
	},
	{
		todoItemId: 2,
		name: 'a done item',
		priority: 1,
		completed: true
	}
]; 

app.get('/', (req, res) => {
	res.status(200).send("ok!");
 });

 app.get('/api/TodoItems', (req, res) => {
	res.send(arr);
 });

module.exports = app;
