# REST-API-constructor - DEPRECIATED (this was my first program, and I love it :) so im keeping it up)
### a helpful constructor for REST APIs using Express, CORS, body-parser, and Mongoose.
> I did not create Express, CORS, body-parser, or Mongoose. Full credit to their respective developers.

## to install the constructor use :
```
npm install --save rest-api-constructor
```

## example usage :
```js
const API = require('REST-API-constructor');
let test = new API(/* see route name */, /* see schema */, /* see port */, /* see db */);
```
### see 'example-app.js'

## route name :
### the API constructor will create 5 routes with the route name. :
```js
app.get('/test', ...)
app.get('/test/:id', ...)
app.post('/test', ...)
app.put('/test/:id', ...)
app.delete('/test/:id', ...)
```

## schema :
### this is just a basic schema, the constructor will convert it into a mongoose schema. :
```js
let schema = {
	fname: String,
	lname: String
}
```

## port:
### this will run the api on the port specified

## db:
### you must have MongoDB running on port 27017. you will then put the name of the db you wish to use.
