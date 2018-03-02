# REST-API-constructor
### a helpful constructor for REST APIs using Express, CORS, body-parser, and Mongoose.

## to install the constructor use :
```
npm install --save REST-API-constructor
```

## example usage :
```js
const API = require('REST-API-constructor');
let test = new API(/* see route name */, /* see schema */, /* see port */);
```

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