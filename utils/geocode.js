//convert your address into coordinates (latitude and longitude) using mapbox
const request = require ('request')
const forecast = require ('./forecast.js')

var geocode = (address, callback) => {
	//console.log (address)
	const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYnBhcnVsIiwiYSI6ImNrNGh2MGxmbTFhMjUzbXJtNm80MHA2OWIifQ.-esyP5DjTO7b2uIwYuYq8Q&limit=1"
	request ({url:url, json:true}, (error, response) => {
		//console.log (response)
		if (error) {
			const ans = {error : "You are not connected to access geolocation services"}
			callback (ans, 'undefined')
		}
		else if (response.body.message) {
			const ans = {error : "Provide some address"}
			callback (ans, 'undefined')
		}
		else if (response.body.features.length === 0) {
			const ans = {error : "Address Provided doesnot exist"}
			callback (ans, 'undefined')
		}
		else {
			var ans= {
				location : response.body.features[0].place_name,
				longitude : response.body.features[0].center[0],
				latitude : response.body.features[0].center[1]
			}
			forecast (ans, (error, response) => {
				if (error !== 'undefined') {
					callback (error, 'undefined')
				}
				else {
					callback ('undefined', response)
				}
			})
		}
	})
}

// geocode ("Haryana", (error, response) => {
// 	console.log (error)
// 	console.log (response)
// })
module.exports = geocode