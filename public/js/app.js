console.log ('hey!, Attached to your HTML page');

//fetch api to fetch weather information
// const url = 'http://localhost:3000/weather?address="Haryana"'
// fetch (url).then ((response) => {
// 	response.json().then((data) => {
// 		console.log (data)
// 	})
// })

//I have to fetch address from the saerch box

//Select form element, which will return form element json
const formElement = document.querySelector ('form')
const input = document.querySelector ('input')
const err = document.querySelector ('#error')
const msg = document.querySelector ('#message')

//put value of response elements empty
err.textContent = "";
msg.textContent = "Enter Your Location"


//When seach button is pressed add event to it
formElement.addEventListener ('submit', (event) => {
	event.preventDefault();  //disable refreshing of page after submit
	//Now we have to take value from input box
	const address = input.value;
	err.textContent = "";
	msg.textContent = "Loading...."
	//fetch data from particular url
	const url = "/weather?address=" + address;
	fetch (url).then ((response) => {
		response.json().then ((data) => {
			if (data.error) {
				console.log (data.error);
				err.textContent = data.error;
				msg.textContent = "Try Again";
			}
			else {
				console.log ("Place: " + data.Place)
				console.log ("Temperature: " + data.Temperature)
				console.log ("precipitationProbability: " + data.PrecipitationProbability)
				err.textContent = "Place: " + data.Place;
				msg.textContent = "Temperature: " + data.Temperature;
			}
		})
	})
})
