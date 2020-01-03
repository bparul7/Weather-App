//gievn latitude and longitude coordinates of a location, return its weather usinh darksky api
const request = require ('request')

const forecast = (query, callback) => {
	const latitude = query.latitude
	const longitude = query.longitude
	const url = "https://api.darksky.net/forecast/d67b5a2c248ca822bd691c2da5975e26/"+latitude+","+longitude;
	request ({url : url, json : true}, (error, response) => {
		if (error) {
			callback ('Unable to connect to weather api', 'undefined')
		}
		else if (response.body.error) {
			callback ('Provide proper coordinates', 'undefined')
		}
		else {
			callback ('undefined', {
				Place : query.location,
				Temperature : response.body.currently.temperature,
				PrecipitationProbability : response.body.currently.precipProbability,
				Humidity : response.body.currently.humidity
			})
		}
	})	
}

module.exports = forecast