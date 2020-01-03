//partials are used to create templates which can be used again and again, and they are dynamic
//load handlebars
const hbs = require ('hbs')
const path = require ('path')
const express = require ('express')
//loading utils function that provide service of geocoding and forecasting
const geocode = require ('./utils/geocode.js')
const app = express();
const port = process.env.PORT || 3000
//Setting handlebars location
//we want express to look for partialTemplates
const partialPath = path.join (__dirname, '/templates/partials')
const viewPath = path.join (__dirname, '/templates/views')
const staticPath = path.join (__dirname, '/public')

//Configuring express to load static directory
app.use (express.static(staticPath))

//Configuring express to use view templates
app.set ('view engine', 'hbs')
app.set ('views', viewPath)

//takes in address od user
app.get ('/', (req, res) => {
	res.render ("index", {
		title : 'Weather',
		name : 'Parul Bansal'
	})
})

app.get ('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send ({
			error : "Provide some address",
		})
	}
	geocode (req.query.address , (error, response) => {
		if (error !== 'undefined') {
			res.send (error)
		}
		else {
			//console.log (response)
			res.send (response)
		}
	})
})

app.get ('/help', (req, res) => {
	res.render ('help', {
		title : 'Help',
		message : 'You should provide your location',
		name : 'Parul Bansal'
	})
})

app.get ('/about', (req, res) => {
	res.render ('about', {
		title : 'About',
		name : 'Parul Bansal'
	})
})

app.get ('/help/*', (req, res) => {
	res.render ('error', {
		title : "404 Error",
		message : "Help Page doesnot exist",
		name : 'Parul Bansal'
	})
})
//wildcard; To match all other routes, which are not matched yet above
app.get ('*', (req, res) => {
	res.render ('error', {
		title : "404 Error",
		message : "Page doesnot Exist",
		name : 'Parul Bansal'
	})
})
//Configuring express to use partials
//hbs.registerPartials (partialPath)
hbs.registerPartials (partialPath)
//To use partial file in views : {{> header file name}}

//running server on
app.listen (port, () => {
	console.log ('Server Is On')
})

//nodemon only runs on its own when js file is changed, to allow nodemon to work for other files too
  //nodemon js filename -e js, hbs