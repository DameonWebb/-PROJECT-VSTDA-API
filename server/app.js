const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser'); //parses incoming data into json object

app.listen(3000, (req, res) => {
	console.log('listening on port 3000...')
})

app.use(bodyParser.json());
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
	if(req.url = '/') {
		res.status(200).json({status: 'ok'});
	}
 });

 app.get('/api/TodoItems', (req, res) => {
	res.send(arr);
 });

 app.post('/api/TodoItems', (req, res) => {
	//given an object
	const obj = {id: ''};
	const match = object.id;
	//if the id of the incoming object matches an id in the array, replace
	if(req.obj == match) {
		
	}
	//if there is no match, add object to the array  
	
	res.json(req.body);

 })

module.exports = app;
