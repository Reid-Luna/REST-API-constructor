const API = require('rest-api-constructor')

let test = new API('testone', {test: String}, 5000, 'test-one')
let testone = new API('testtwo', {test: String}, 5000, 'test-one')
let testtwo = new API('testthree', {test: String}, 3000, 'test-one')