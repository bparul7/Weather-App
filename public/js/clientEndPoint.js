//building client end point means we will fetch json data from a url 
//Here url will be run by browser
//

//Fetch api
//It is not a node api, it is browser api
//It is asynchronous function
//Callback function is provided in then function

//fetch (url from where data to be fetched).then (callback with response)
console.log ("I am attached")
fetch ("http://puzzle.mead.io/puzzle").then ( (response) => {
	//wHAT TO BE DONE WITH DATA FETCHED
	//response.json() -> parse data
	response.json().then ((data) => {
		console.log (data);
	})
})