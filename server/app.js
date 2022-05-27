const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser'); //parses incoming data into json object

app.listen(3000, (req, res) => {
	console.log('listening on port 3000...')
})

app.use(bodyParser.json());//this is the middleware


//store the object inside of an array
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

//GET responds with a 200 response code
//must be formatted in json
app.get('/', (req, res) => {
	if(req.url = '/') {
		res.status(200).json({status: 'ok'});
	}
 });

 //GET responds with all the items that are inside the object
 app.get('/api/TodoItems', (req, res) => {
	res.send(arr);
 });

 //POST responds with items and a status of 201
 app.post('/api/TodoItems', (req, res) => {
	//given an object

	const obj = {id: ''};
	//const task = arr.find([0]);
	let index = arr.findIndex(task => task['todoItemId'] == req.body['todoItemId'])
	arr.splice(task)
	arr.push(req.body);

	//if the id of the incoming object matches an id in the array, replace
	//if there is no match, add object to the array  
	
	res.json(req.body);
	res.status(201).json({status: 'ok'})

 })

module.exports = app;
