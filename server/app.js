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

 //GET /api/TodoItems/{id} responds with a single TodoItem
 //res should be formatted in json
 app.get('/api/TodoItems/:number', (req, res) => {
	res.json(arr.find(function(item){
		return item.todoItemId == req.params.number
	}))
 })

 //POST responds with items and a status of 201
 app.post('/api/TodoItems', (req, res) => {
	let index = arr.findIndex(task => task['todoItemId'] == req.body['todoItemId'])
	//if the id of the incoming object matches an id in the array, replace
	//if there is no match, add object to the array
	if(index == -1) {
		arr.push(req.body);
		res.status(201).send(req.body);
	} else {
		arr[index]= req.body;
		res.status(201).send(req.body);
	}  
 })


 //use a route parameter to remove the item with a matching ID from the dataset
 //res to the req with the deleted item
 //res with a status code 200
 app.delete('/api/TodoItems/:number', (req, res) => {
	
	let item;
	for(let i=0; i < arr.length; i++){
		if(arr[i].todoItemId == req.params.number){
			item = arr[i];
			arr.splice(i, 1);
}

}

res.status(200).send(item);
 

 })
module.exports = app;
